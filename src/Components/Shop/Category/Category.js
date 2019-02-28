import React from 'react'
import {Link} from 'react-router-dom'
import './category.css'

function Category(props){      
    return(
        <div className='parentDiv'>
            <Link to={`/shop/products/${props.category_id}`}>
                <div 
                    className='CategoryComponent' 
                    style={{backgroundImage: `url(${props.category_image})`, backgroundSize: 'cover', position: 'relative'}}
                >
                    <div className='baby-div'>

                    <p className='CategoryTitle'>{props.category_name}</p>
                    
                    </div>

            </div></Link>
        </div>
    )
}
export default Category