import React, {Component} from 'react'
import './cart.css'
import axios from 'axios'
import { connect } from 'react-redux';
import { qtyUp, qtyDown } from '../../../ducks/reducers/shop_reducer'

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

    updateQuantity(quantityChange, item){
        console.log(item)
        const newQuantity = item.quantity + quantityChange
        if(newQuantity<0){
            
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
                <span className='cart-total'>TOTAL:</span>
                <br/>
                <button className='checkout-button'>CHECKOUT</button>
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

export default connect(mapStateToProps, { qtyUp, qtyDown })(Cart)