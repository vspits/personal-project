import React from 'react'
import {Link} from 'react-router-dom'
import './paymentComplete.css'

export default function PaymentComplete(props){
    return (
        <div>
            <span className='payment-complete-text'>Your Payment is Complete!</span>
            <Link to='/shop/category'><button>RETURN TO SHOP</button></Link>
        </div>
    )
}