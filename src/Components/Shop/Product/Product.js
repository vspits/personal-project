import React, {Component} from 'react'
import axios from 'axios'

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
        console.log(product_id)
        axios.get(`/shop/${product_id}`)
        .then(res => {
            console.log(res.data)
            this.setState({product: res.data})
        })
    }


    render(){
        return (
            <div key={this.state.product[0].product_id}>
                <p>{this.state.product[0].product_name}</p>
                <p>{this.state.product[0].product_price}</p>
                <p>{this.state.product[0].product_image}</p>
                <p>{this.state.product[0].product_description}</p>
            </div>
        )
    }
}

export default Product