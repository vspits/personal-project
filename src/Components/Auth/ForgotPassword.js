import React from 'react'
import './forgotPassword.css'
import {Link} from 'react-router-dom'

export default function ForgotPassword(props){
    return (
        <div className='ForgotPassword'>
            <span className='text'>Sucks to suck! No second chances this time bish.</span>
            <br></br>
            <br></br>
            <Link to='/auth/login'><span className='text'>Back to Login</span></Link>
        </div>
    )
}