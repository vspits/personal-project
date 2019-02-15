module.exports ={
    getCategories: (req, res, next) => {
        const db = req.app.get('db')
        db.get_categories()
        .then(category => res.status(200).send(category))
        .catch(err => res.status(500))
    },
    getProducts: (req, res, next) => {
        const db = req.app.get('db')
        const { category_id }= req.params
        db.get_products({category_id})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },
    getProduct: (req, res, next) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        db.get_product({product_id})
        .then(product => res.status(200).send(product))
    },
    addToCart: () => {

    },
    getCart: () => {

    },
    updateQuantity: () => {
        
    },
}