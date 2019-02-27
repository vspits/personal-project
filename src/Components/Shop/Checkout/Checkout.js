import React from 'react'
import CheckoutForm from './../CheckoutForm/CheckoutForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import './checkout.css'

export default function Checkout(props){
    return (
        <StripeProvider apiKey="pk_test_FufTuEYTSPj8ORgVRfP930bA">
            <div className='payment-container'>
                <span className='payment-header'>PAYMENT</span>
                <Elements>
                    <CheckoutForm />
                </Elements>
            </div>
        </StripeProvider>
    )
}