import React, {Component} from 'react'
import axios from 'axios'

class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
        this.getProducts = this.getProducts.bind(this)
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts(){
        axios.get(`/shop/products`)
        .then(res => {
            this.setState({products: res.data})
        })
    }

    render(){
        let mappedProducts = this.state.products.map(product => {
            return (
                <Products 
                    key={product.product_id}
                    product_name={product.product_name}
                    product_image={product.product_image}
                    product_description={product.product_description}
                    product_price={product.product_price}/>
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