import React from 'react'
import {Link} from 'react-router-dom'
import './paymentComplete.css'

export default function PaymentComplete(props){
    return (
        <div>
            <br />
            <span className='payment-complete-text'>Your Payment is Complete!</span>
            <br />
            <br />
            <Link to='/shop/category'><button className='return-to-shop-button'>RETURN TO SHOP</button></Link>
        </div>
    )
}