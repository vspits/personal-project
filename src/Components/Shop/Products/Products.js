import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './products.css'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
        this.getProducts = this.getProducts.bind(this)
    }

    componentDidMount(){
        this.getProducts(this.props.match.params.category_id)
    }

    getProducts(category_id){
        axios.get(`/shop/products/${category_id}`)
        .then(res => {
            this.setState({products: res.data})
        })
    }

    render(){
        let mappedProducts = this.state.products.map(product => {
            return (
                <Link to={`/shop/${product.product_id}`}>
                <div 
                    className='ProductComponent'
                    style={{backgroundImage: `url(${product.product_image})`, backgroundSize: 'cover'}}
                    key={product.product_id}>

                    <p>{product.product_name}</p>
                    <p>${product.product_price}.00</p>
                </div></Link>
            )
        })
        return (
            <div>
                <p className='producttitle'>Products:</p>
                <div className='ParentComponent'>
                    {mappedProducts}
                </div>
            </div>
        )
    }
}

export default Products