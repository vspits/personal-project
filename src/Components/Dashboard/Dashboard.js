import React from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom'

export default function Dashboard(props){
    return (
        <div className='dashcontainer' style={{backgroundImage: `url(https://images.pexels.com/photos/286763/pexels-photo-286763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`, backgroundSize: 'cover', position: 'relative'}}>
            
            <Link to='/shop/category'><button className='dashboard-button' id='top-button'>SHOP</button></Link>
            <Link to='/posts'><button className='dashboard-button'>BLOG</button></Link>
        </div>
    )
}