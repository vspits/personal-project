import React from 'react'
import {Link} from 'react-router-dom'

export default function Dashboard(props){
    return (
        <div>
            <span>Dashboard</span>
            <br></br>
            <Link to='/shop'><button>SHOP</button></Link>
            <Link to='/posts'><button>BLOG</button></Link>
        </div>
    )
}