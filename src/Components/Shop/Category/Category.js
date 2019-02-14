import React from 'react'
import {Link} from 'react-router-dom'
import './category.css'

function Category(props){      
    return(
        <div>
            <div className='CategoryComponent'>
                <Link to='/shop/products'><p className='Title'>{props.category_name}</p></Link>
            </div>
        </div>
    )
}
export default Category