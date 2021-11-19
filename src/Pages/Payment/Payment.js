import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51HtRrJAV4Aj47zyGemqf119quTP8ZDA8cIWI4UwyUMadG7Xx6hWErYHkhYC0B14Vn1xQFOvoe3JFV6ZLYCQ2QnN700yTbShWRx');

const Payment = () => {
    const { apointmentId } = useParams();
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${apointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
        
    }, [apointmentId])
    


    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName} </h2>
            <h4>Pay: ${appointment.price}</h4>

                {appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}/>
                </Elements>}
        </div>
    );
};

export default Payment;