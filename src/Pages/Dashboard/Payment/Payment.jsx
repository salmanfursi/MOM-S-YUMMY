import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
console.log('dddd',stripePromise);

const Payment = () => {

  return (
    <div>
      <SectionTitle heading={'Please process'} subHeading={'Payment'}></SectionTitle>
      <h1 className='text-4xl text-lime-700 text-center'>payment.............</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;