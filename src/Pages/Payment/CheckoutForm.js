import { CircularProgress, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from './../../Hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    
    const { price, patientName, _id } = appointment;
    const [error,setError]=useState([])
  const [clientSecret, setClientSecret] = useState('');
  const [paySuccess, setPaySuccess] = useState('');
  const [process, setProcess] = useState(false)

    const stripe = useStripe();
    const elements = useElements();

    const { user } = useAuth();

    useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
        return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
      }
      setProcess(true)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
        setError('')
      console.log(paymentMethod);
    }
    
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
          name: patientName,
          email: user?.email
                },
                },
            },
        );
    
      if (intentError) {
      setPaySuccess('')
        setError(intentError.message)
        }
    else {
      setError('')
      setPaySuccess('You payment is Successfull')
        console.log(paymentIntent)
        setProcess(false)
        const payment = {
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          card4digi: paymentIntent.last4
        }
        const url = `http://localhost:5000/appointments/${_id}`
        fetch(url, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(payment)
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        }    
    }
    return (
        <Container>
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
                {process ? <CircularProgress/> :<button type="submit" disabled={!stripe || paySuccess}>
                    Pay${price}
                </button>}
            </form>
            {
                error && <p style={{color:'red'}}>{error}</p>
            }
            {
                paySuccess && <p style={{color:'green'}}>{paySuccess}</p>
            }
        </Container>
    );
};

export default CheckoutForm;