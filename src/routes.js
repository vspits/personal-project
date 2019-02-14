import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Cart from './Components/Shop/Cart/Cart'
import About from './Components/About/About'
import Login from './Components/Auth/Login'
import Posts from './Components/Blog/Posts/Posts'
import Register from './Components/Auth/Register'
import ForgotPassword from './Components/Auth/ForgotPassword'
import ShopDashboard from './Components/Shop/ShopDashboard/ShopDashboard';
import Category from './Components/Shop/Category/Category';
import Products from './Components/Shop/Products/Products'

export default (
    <Switch>
        
        <Route exact path='/' component={Dashboard}/>
        <Route path='/about' component={About}/>

        {/* AUTHENTICATION */}
        <Route path='/auth/login' component={Login}/>
        <Route path='/auth/register' component={Register}/>
        <Route path='/forgotpassword' component={ForgotPassword}/>
        
        {/* SHOP */}
        <Route path='/shop' component={ShopDashboard}/>
        <Route path='/shop/category' component={Category} />
        <Route path='/shop/products' component={Products}/>
        <Route path='/cart' component={Cart}/>


        {/* BLOG */}
        <Route path='/posts' component={Posts}/>

        {/* <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/> */}
    </Switch>
)