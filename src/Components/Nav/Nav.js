import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav(props){
    return (
        <div className='Nav'>

            <div className='Logo'>

                <Link to='/' className='link-tags'><span className='title'>Cosmicality</span></Link>

            </div>
            
            <div className='links-container'>

                <Link to='/cart' className='link-tags'><span className='nav-links'>CART</span></Link>

                <Link to='/shop' className='link-tags'><span className='nav-links'>SHOP</span></Link>

                <Link to='/posts' className='link-tags'><span className='nav-links'>BLOG</span></Link>

                <Link to='/about' className='link-tags'><span className='nav-links'>ABOUT</span></Link>

                <Link to='/auth/login' className='link-tags'><span className='nav-links'>LOGIN</span></Link>

            </div>
        </div>
    )
}