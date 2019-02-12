import React, {Component} from 'react'
import './category.css'

class Category extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p className='Title'>Shop by Category</p>

                <div className='CategoryComponent'>
                    <span></span>
                </div>

            </div>
        )
    }
}
export default Category