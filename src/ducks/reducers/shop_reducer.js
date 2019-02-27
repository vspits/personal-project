
const initialState = {
    product_id: 0,
    product_name: '',
    product_image: '',
    product_price: 0,
    product_description: '',
    product_category: 0
}


// // // CONSTANTS // // //

const UPDATE_CART = 'UPDATE_CART'
const ADD_PRODUCT = 'ADD_PRODUCT'

// // // ACTION BUILDERS // // //

export function updateCart(cartObj){
    return {
        type: UPDATE_CART,
        payload: cartObj
    }
}

export function addProduct(productObj){
    return {
        type: ADD_PRODUCT,
        payload: productObj
    }
}

// // // REDUCER FUNCTION // // //

export default function shop_reducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case UPDATE_CART:
            const {product_id, product_name, product_price, order_id, quantity, order_price} = payload
            return {...state, product_id, product_name, product_price, order_id, quantity, order_price};

        case ADD_PRODUCT:
            return {...state, ...payload}
            
        default:
            return state
    }
}