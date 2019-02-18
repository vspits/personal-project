import React, {Component} from 'react'
import axios from 'axios'
import './product.css'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: [{
                product_id: 0,
                product_name: '',
                product_price: 0,
                product_description: '',
                product_image: ''
            }]
        }
        this.getProduct = this.getProduct.bind(this)
    }

    componentDidMount(){
        this.getProduct(this.props.match.params.product_id)
    }

    getProduct(product_id){
        axios.get(`/shop/${product_id}`)
        .then(res => {this.setState({product: res.data})})
    }

    addToCart(){
        
    }


    render(){
        return (
            <div className='container'>

                <div className='img-container'>

                    <div className='product-image' style={{backgroundImage: `url(${this.state.product[0].product_image})`, backgroundSize: 'cover'}}></div>

                </div>

                <div 
                    className='info-container' 
                    key={this.state.product[0].product_id}>

                    <span className='product-title'>{this.state.product[0].product_name}</span>

                    <span className='product-price'>${this.state.product[0].product_price}.00</span>

                    <button className='addtocartbutton'>ADD TO CART</button>

                    <span className='product-description-title'>PRODUCT DESCRIPTION</span>

                    <p className='product-description'>{this.state.product[0].product_description}</p>

                </div>

            </div>
        )
    }
}

export default Product