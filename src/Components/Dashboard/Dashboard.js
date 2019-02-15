import React from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom'

export default function Dashboard(props){
    return (
        <div>
            <Link to='/shop/category'><button className='dashboard-button'>SHOP</button></Link>
            <Link to='/posts'><button className='dashboard-button'>BLOG</button></Link>
        </div>
    )
}