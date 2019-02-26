import React, {Component} from 'react'
import axios from 'axios'
import './product.css'
import { connect } from 'react-redux'

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
        this.addToCart = this.addToCart.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount(){
        this.getProduct(this.props.match.params.product_id)
    }

    getProduct(product_id){
        axios.get(`/shop/${product_id}`)
        .then(res => {this.setState({product: res.data})})
    }

    addToCart(){
        const {user_id} = this.props
        const {product_id} = this.props.match.params
        
        axios.post(`/cart/${user_id}/${product_id}`)
        .then(res => {
            alert('Product is added to your cart')
            
        })
        .catch(err => console.log(err))
    }

    deleteProduct(){
        let {product_id} = this.props.match.params
        console.log(this.props.match.params)
        product_id = parseInt(product_id)

        axios.delete(`/delete/${product_id}`)
            .then(res => {
                this.props.history.push(`/shop/category`)
            })
            .catch(err => console.log(err))
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

                    <button className='addtocartbutton' onClick={() => this.addToCart()}>ADD TO CART</button>

                    <span className='product-description-title'>PRODUCT DESCRIPTION</span>

                    <p className='product-description'>{this.state.product[0].product_description}</p>

                    <div>
                    {
                        (this.props.isadmin) &&
                        
                        <button onClick={() => this.deleteProduct()} className='delete-product-button'>Delete Product</button>
                    }
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {user_id, isadmin} = reduxState.users_reducer
    return {
        user_id,
        isadmin
    }
}

export default connect(mapStateToProps)(Product)