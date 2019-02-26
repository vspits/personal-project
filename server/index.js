
// // // // // IMPORTS // // // // //

require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const sessions = require('express-session')
const auth_ctrl = require('./controllers/auth_controller')
const shop_ctrl = require('./controllers/shop_controller')
const blog_ctrl = require('./controllers/blog_controller')

const app = express()
const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET, NODE_ENV } = process.env

// // // // // MIDDLEWARE // // // // //

app.use(json())

massive(DB_CONNECTION).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is werkin vry hard`))
})

app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
}))

app.use( async (req, res, next) => {
    if(!req.session.user && NODE_ENV === 'development'){
        const db = req.app.get('db')
        let user = await db.user.login({email: 'v@gmail.com'})
        req.session.user = user[0]
    }
    next()
})




// // // // // ENDPOINTS // // // // //

//authentication
app.post(`/auth/login`, auth_ctrl.login)
app.post(`/auth/register`, auth_ctrl.register)
app.post(`/auth/logout`, auth_ctrl.logout)
app.get(`/api/user`, auth_ctrl.getUser)

//products
app.get(`/shop/category`, shop_ctrl.getCategories)
app.get(`/shop/products/:category_id`, shop_ctrl.getProducts)
app.get(`/shop/:product_id`, shop_ctrl.getProduct)
app.post(`/cart/:user_id/:product_id`, shop_ctrl.addToCart)

//admin feats
app.delete(`/delete/:product_id`, shop_ctrl.deleteProduct)

//cart
app.get(`/cart`, shop_ctrl.getCart)
app.patch(`/cart/:quantity/:item_id`, shop_ctrl.updateQuantity)

//blog
app.get(`/posts`, blog_ctrl.getAllPosts)
app.get(`/post/:post_id`, blog_ctrl.getPost)