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
        // this.calculateTotal = this.calculateTotal.bind(this)
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

    // calculateTotal(){
    //     this.product_price * this.quantity
    // }

    updateQuantity(quantityChange, item){
        console.log(item)
        const newQuantity = item.quantity + quantityChange
        if(newQuantity<0){
            alert(`Cannot have quantity below 0`)
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
                <br/>
                {/* <span className='cart-total'>TOTAL: {() => this.calculateTotal()}</span> */}
                <br/>
                <Link to='/checkout'><button className='checkout-button'>CHECKOUT</button></Link>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {user_id, quantity} = reduxState.users_reducer
    return {
        user_id,
        quantity
    }
}

export default connect(mapStateToProps)(Cart)