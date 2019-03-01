import React, {Component} from 'react'
import './cart.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: [{
                product_id: 0,
                product_name: '',
                product_price: 0,
                product_image: '',
                quantity: 0
            }]
        }
        this.getCart = this.getCart.bind(this)
        this.updateQuantity = this.updateQuantity.bind(this)
        this.calculateSubtotal = this.calculateSubtotal.bind(this)
        this.calculateTaxes = this.calculateTaxes.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
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

    calculateSubtotal(){
        let subtotal = this.state.cart.reduce((accumulator, value)=> {
            return accumulator + (value.quantity * value.product_price)
        }, 0)

        return subtotal.toFixed(2)
    }

    calculateTaxes(){
        let taxTotal = this.state.cart.reduce((accumulator, value) => {
            return accumulator + (value.quantity * (value.product_price * 0.047))
        }, 0)

        return taxTotal.toFixed(2)
    }

    calculateTotal(){
        let total = this.state.cart.reduce((accumulator, value) => {
            return accumulator + (value.quantity * (value.product_price * 1.047))
        }, 0)

        return total.toFixed(2)
    }

    updateQuantity(quantityChange, item){
        const newQuantity = item.quantity + quantityChange
        if(newQuantity<1){
            axios.delete(`/cart/remove/${newQuantity}/${item.item_id}`)
            .then(res => this.getCart())
        } else {
            axios.patch(`/cart/${newQuantity}/${item.item_id}`)
            .then(res => this.getCart())
        }
    }

    render(){
        let mappedCart = this.state.cart.map(item => {
            return (
                <div className='cart-items-container' key={item.product_id}>
                    <div>
                        {/* <img 
                            src={`url(${item.product_image})`} 
                            alt='product-thumbnail' 
                            style={{height: '100px', width: '100px'}}/> */}

                        <span className='item-labels'>{item.product_name}</span>
                    </div>

                    <div>
                        <button onClick={() => this.updateQuantity(-1, item)} className='quantity-buttons'>-</button>
                        <span className='item-labels'>{item.quantity}</span>
                        <button onClick={() => this.updateQuantity(1, item)} className='quantity-buttons'>+</button>
                    </div>

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

                <br />
                <span className='cart-total'>SUBTOTAL: ${this.calculateSubtotal()}</span>
                <br />
                <span className='cart-total'>TAXES: ${this.calculateTaxes()}</span>
                <br />
                <span className='cart-total'>TOTAL: ${this.calculateTotal()}</span>
                <br/>
                <Link to='/checkout'><button className='checkout-button'>CHECKOUT</button></Link>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {user_id, quantity, product_price} = reduxState.users_reducer
    return {
        user_id,
        quantity,
        product_price
    }
}

export default connect(mapStateToProps)(Cart)