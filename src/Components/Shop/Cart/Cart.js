import React, {Component} from 'react'
import './cart.css'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className='cart-component'>
                <span className='cart-title'>SHOPPING CART</span>

                <div className='cart-details'>
                    <span className='cart-labels'>ITEM</span>
                    <span className='cart-labels'>QUANTITY</span>
                    <span className='cart-labels'>PRICE</span>
                </div>
                    <span className='cart-total'>TOTAL:</span>
                    <br></br>
                    <button className='checkout-button'>CHECKOUT</button>
            </div>
        )
    }
}
export default Cart