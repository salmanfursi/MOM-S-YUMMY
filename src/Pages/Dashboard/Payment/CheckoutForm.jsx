import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import './CheckoutForm.css'
import useTransection from '../../../Hooks/useTransection';

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState('');
  const { user } = useAuth()
  const [refetch]=useTransection()

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          console.log('client secret 20', res.data.ClientSecret);
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    console.log('card', card);

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setCardError('')
    }

    setProcessing(true)

    const { paymentIntent, error: confirmedError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      },
    );

    if (confirmedError) {
      console.log(confirmedError);
    }
    console.log('paymentIntent', paymentIntent);
    if (paymentIntent.status === 'succeeded') {
      setTransectionId(paymentIntent.id)
      //save payment information to the server

      const payment = {
        email: user?.email,
        transectionId: paymentIntent.id,
        price,
        date: new Date(),
        cart: cart?.length,
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item.menuItemId),
        status: "service pending",
        itemsNames: cart.map(item => item.name)
      }

      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log('payment er post hoise', res.data);
          if (res.data.insertResult
            .insertedId) {
              refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "added on cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

    }

  }


  return (
    <>
      <div className='w-2/3 mx-auto mt-10'>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className=' btn btn-outline btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
        {transectionId && <p className='text-green-600'>Transection complete with transection Id:{transectionId}</p>}
      </div>
    </>
  );
};

export default CheckoutForm;