import React, {Component} from 'react'
import './adminTools.css'
import { addProduct } from '../../../ducks/reducers/shop_reducer'
import { connect } from 'react-redux';
import axios from 'axios';


class AdminTools extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleChange(prop, value){
        this.setState({[prop]: value})
    }
    
    addProduct(){
        const {product_name, product_image, product_price, product_description, product_category} = this.props
        
        axios.post(`/add/product`, {product_name, product_image, product_price, product_description, product_category})
        .then(res => {
            console.log(res.data)
            const {product_id} = res.data
            this.props.addProduct(res.data)
            this.props.history.push(`/shop/${product_id}`)
        })
    }

    render(){
        return (
            <div className='AdminTools'>

                <span className='admin-tools-title'>Admin Tools</span>

                <br />
                <br />
                <br />

                <span>Search orders:</span>
                <br />
                <input placeholder='Order Number' type='integer'/>

                <br />
                <br />
                <br />

                <span>Search User:</span>
                <br />
                <input placeholder='User ID'/>

                <br />
                <br />
                <br />

                <span>Add Product:</span>
                <br />
                <input onChange={(e) => this.handleChange('product_title', e.target.value)} placeholder='Product Title' type='text'/>
                <br />
                <input onChange={(e) => this.handleChange('product_price', e.target.value)} placeholder='Product Price' type='integer'/>
                <br />
                <input onChange={(e) => this.handleChange('product_image', e.target.value)} placeholder='Image URL' type='text'/>
                <br />
                <select>
                    <option>Litfam Essential</option>
                    <option>Eggstra Money</option>
                    <option>yeet(negativity)</option>
                </select>
                <br />
                <textarea rows='10' cols='50' onChange={(e) => this.handleChange('product_description', e.target.value)} className='' id='description-textarea' placeholder='Description' type='text' />
                <br />
                <button onClick={() => this.addProduct()}>Add Product</button>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {product_id, product_name, product_price, product_image, product_description, product_category} = reduxState.shop_reducer
    return {
        product_id, 
        product_name, 
        product_price, 
        product_image, 
        product_description, 
        product_category
    }
}

export default connect(mapStateToProps, {addProduct})(AdminTools)