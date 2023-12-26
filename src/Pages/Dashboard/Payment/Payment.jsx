import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../Hooks/useCart';
import Transections from './Transections';


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
console.log('dddd',stripePromise);

const Payment = () => {
  const [,cart]=useCart()
  console.log('cart total price',cart);
  const total= cart.reduce((sum,item) => sum + item.price,0)
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <SectionTitle heading={'Please process'} subHeading={'Payment'}></SectionTitle>
      <Elements stripe={stripePromise}>
        <Transections></Transections>
        <CheckoutForm cart={cart} price={price} ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;