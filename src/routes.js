import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Cart from './Components/Shop/Cart/Cart'
import About from './Components/About/About'
import Login from './Components/Auth/Login'
import Category from './Components/Shop/Category/Category'
import Posts from './Components/Blog/Posts/Posts'
import Register from './Components/Auth/Register'
import ForgotPassword from './Components/Auth/ForgotPassword'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/about' component={About}/>
        <Route path='/auth/login' component={Login}/>
        <Route path='/shop' component={Category}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/auth/register' component={Register}/>
        <Route path='/forgotpassword' component={ForgotPassword}/>
        {/* <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/>
        <Route path='' component={}/> */}
    </Switch>
)