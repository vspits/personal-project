import React, {Component} from 'react'
import './shopDashboard.css'
import Category from './../Category/Category'
import axios from 'axios'

class ShopDashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            categories: []
        }
        this.getCategories = this.getCategories.bind(this)
    }

    componentDidMount(){
        this.getCategories()
    }

    getCategories(){
        axios.get(`/shop/category`)
            .then(res => {
                this.setState({categories: res.data})
            })
            .catch(err => console.log(err))
    }

    render(){
        let mappedCategories = this.state.categories.map(category => {
            return (
                <Category 
                    key={category.category_id}
                    category_name={category.category_name}
                    category_image={category.category_image}
                    category_id={category.category_id}/>
            )
        })
        return(
            <div>
                <p className='Title'>Shop by Category:</p>
                <div className='Categories'>
                    {mappedCategories}
                </div>
            </div>
        )
    }
}
export default ShopDashboard