import React, {Component} from 'react'
import axios from 'axios'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
        this.getProducts = this.getProducts.bind(this)
    }

    componentDidMount(){
        this.getProducts(this.props.match.params.category_id)
    }

    getProducts(category_id){
        axios.get(`/shop/products/${category_id}`)
        .then(res => {
            this.setState({products: res.data})
        })
    }

    render(){
        let mappedProducts = this.state.products.map(product => {
            return (
                <div key={product.product_id}>
                    <p>{product.product_name}</p>
                    <p>{product.product_image}</p>
                    <p>{product.product_description}</p>
                    <p>{product.product_price}</p>
                </div>
            )
        })
        return (
            <div>
            {mappedProducts}
            </div>
        )
    }
}

export default Products