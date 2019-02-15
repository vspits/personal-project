import React, {Component} from 'react'
import axios from 'axios'

class Product extends Component {
    constructor(props){
        super(props)
        this.super = {
            product: []
        }
        this.getProduct = this.getProduct.bind(this)
    }

    componentDidMount(){
        this.getProduct(this.props.match.params.product_id)
    }

    getProduct(product_id){
        axios.get(`/shop/${product_id}`)
        .then(res => {
            this.setState({product: res.data})
        })
    }


    render(){
        return (
            <div key={this.props.product_id}>
                <p>{this.props.product_name}</p>
                <p>{this.props.product_price}</p>
                <p>{this.props.product_image}</p>
                <p>{this.props.product_description}</p>
            </div>
        )
    }
}

export default Product