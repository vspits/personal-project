
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
const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET } = process.env

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



// // // // // ENDPOINTS // // // // //

//authentication
app.post(`/auth/login`, auth_ctrl.login)
app.post(`/auth/register`, auth_ctrl.register)
app.post(`/auth/logout`, auth_ctrl.logout)

//products
app.get(`/shop/category`, shop_ctrl.getCategories)
app.get(`/shop/products`, shop_ctrl.getProducts)
app.get(`/shop/:product_id`, shop_ctrl.getProduct)
app.post(`/cart`, shop_ctrl.addToCart)

//cart
app.get(`/cart`, shop_ctrl.getCart)
app.patch(`/cart/:quantity`, shop_ctrl.updateQuantity)

//blog
app.get(`/posts`, blog_ctrl.getAllPosts)
app.get(`/post/:post_id`, blog_ctrl.getPost)