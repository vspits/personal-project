import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav(props){
    return (
        <div className='Nav'>
            <div className='Logo'>
                <Link to='/'><span>LOGO</span></Link>
            </div>
            <div className='links-container'>
                <Link to='/cart'><span className='nav-links'>CART</span></Link>
                <Link to='/shop'><span className='nav-links'>SHOP</span></Link>
                <Link to='/posts'><span className='nav-links'>BLOG</span></Link>
                <Link to='/about'><span className='nav-links'>ABOUT</span></Link>
                <Link to='/auth/login'><span className='nav-links'>LOGIN</span></Link>
            </div>
        </div>
    )
}