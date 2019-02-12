

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

// // // ACTION BUILDERS // // //

// export function updateCart(){
//     return {
//         type: UPDATE_CART,
//         payload:
//     }
// }

// // // REDUCER FUNCTION // // //

export default function reducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        default:
            return state
    }
}