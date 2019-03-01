module.exports ={
    getCategories: (req, res, next) => {
        const db = req.app.get('db')
        db.get_categories()
        .then(category => res.status(200).send(category))
        .catch(err => res.status(500))
    },
    getProducts: (req, res, next) => {
        const db = req.app.get('db')
        const { category_id } = req.params
        db.get_products({category_id})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },
    getProduct: (req, res, next) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        db.get_product({product_id})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },
    addToCart: async (req, res, next) => {
        const db = req.app.get('db')
        const { product_id, user_id } = req.params
        let findOrder = await db.cart.find_order({user_id})

        if (findOrder.length === 0) { // when the user has no open carts
            let order_id = await db.cart.add_order_id({user_id})
            db.cart.add_to_order({ order_id: order_id[0].order_id, product_id })
                .then(item => res.sendStatus(200))
        } else {
            let arr = findOrder.filter(item => {
                return (!item.checked_out)
            })
            if(arr[0]){ // if they have an open cart
                db.cart.add_to_order({ order_id: arr[0].order_id, product_id })
                    .then(item => res.sendStatus(200))
                
            } else { // when the user has no open carts
                let order_id = await db.cart.add_order_id({user_id})
                db.cart.add_to_order({ order_id: order_id[0].order_id, product_id })
                    .then(item => res.sendStatus(200))
            }
        }
    },
    getCart: (req, res, next) => {
        const db = req.app.get('db')
        const { user_id } = req.session.user
        
        db.cart.get_user_order({ user_id })
            .then(cart => res.status(200).send(cart))
            .catch(err => console.log(err))
    },
    updateQuantity: (req, res, next) => {
        const db = req.app.get('db')
        const {quantity, item_id} = req.params

        db.cart.update_quantity({quantity, item_id})
            .then(item => res.status(200).send(item))
            .catch(err => console.log(err))

    },
    removeFromCart: (req, res, next) => {
        const db = req.app.get('db')
        const { item_id } = req.params

        db.cart.remove_from_cart({item_id})
            .then(product => res.sendStatus(200))
            .catch(err => console.log(err))
    },
    deleteProduct: (req, res, next) => {
        const db = req.app.get('db')
        const {product_id} = req.params

        db.products.delete_product({product_id})
            .then(product => res.sendStatus(200))
            .catch(err => console.log(err))
    },
    addProduct: (req, res, next) => {
        const db = req.app.get('db')
        const {product_name, product_image, product_price, product_description, product_category} = req.body
        console.log(req.body)

        db.products.add_product({product_name, product_image, product_price, product_description, product_category})
            .then(product => res.status(200).send(product))
            .catch(err => console.log(err))
    }
}