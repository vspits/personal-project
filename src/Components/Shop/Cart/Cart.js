import React, {Component} from 'react'
import './cart.css'
import axios from 'axios'
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: [{
                product_id: 0,
                product_name: '',
                product_price: 0,
                quantity: 0
            }]
        }
        this.getCart = this.getCart.bind(this)
    }

    componentDidMount(){
        this.getCart()
    }

    getCart(){
        axios.get(`/cart`)
            .then(res => {
                this.setState({cart: res.data})
            })
            .catch(err => console.log(err))
    }

    calculateTotal(){
        
    }

    render(){
        let mappedCart = this.state.cart.map(item => {
            return (
                <div className='cart-items-container' key={item.product_id}>
                    <span className='item-labels'>{item.product_name}</span>
                    <span className='item-labels'>{item.quantity}</span>
                    <span className='item-labels'>${item.product_price}.00</span>
                </div>
            )
        })

        return (
            <div className='cart-component'>
                <span className='cart-title'>SHOPPING CART</span>

                <div className='cart-details'>
                    <span className='cart-labels'>ITEM</span>
                    <span className='cart-labels'>QUANTITY</span>
                    <span className='cart-labels'>PRICE</span>
                </div>

                <div>
                    {mappedCart}
                </div>
                <br/>
                <span className='cart-total'>TOTAL:</span>
                <br/>
                <button className='checkout-button'>CHECKOUT</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {user_id} = reduxState.users_reducer
    return {
        user_id
    }
}

export default connect(mapStateToProps)(Cart)