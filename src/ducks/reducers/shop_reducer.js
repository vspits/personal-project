

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
const QTY_UP = 'QTY_UP'
const QTY_DOWN = 'QTY_DOWN'

// // // ACTION BUILDERS // // //

export function updateCart(cartObj){
    return {
        type: UPDATE_CART,
        payload: cartObj
    }
}

export function qtyUp(quantity){
    return {
        type: QTY_UP,
        payload: quantity
    }
}

export function qtyDown(quantity){
    return {
        type: QTY_DOWN,
        payload: quantity
    }
}

// // // REDUCER FUNCTION // // //

export default function shop_reducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case UPDATE_CART:
            const {product_id, product_name, product_price, order_id, quantity, order_price} = payload
            return {...state, product_id, product_name, product_price, order_id, quantity, order_price};

        case QTY_UP:
            return Object.assign([], state.map(item => {
                if(item.quantity === type){
                    item.quantity += QTY_UP
                }
                return item;
            }))

        case QTY_DOWN:
            return Object.assign([], state.map(item => {
                if(item.quantity === type){
                    item.quantity -= QTY_DOWN
                }
                return item;
            }))
            
        default:
            return state
    }
}