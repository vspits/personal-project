import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import { updateUser } from '../../ducks/reducers/users_reducer'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import Dropdown from 'react-bootstrap/Dropdown'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        const { user_id } = this.props
        if (!user_id) {
            axios.get(`/api/user`)
            .then(res => {
                this.props.updateUser(res.data)
            })
            .catch(err => {
                this.props.history.push(`/shop/category`)
            })
        } else {
            //don't move
        }
    }
    
    logout = () => {
        axios.post(`/auth/logout`)
        .then(res => {
            this.props.updateUser({})
            this.props.history.push('/shop/category')
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render(){
        return (
            // <div className='Nav'>
            //     <div className='Logo'>
            //         <Link to='/' className='link-tags'><span className='title'>Cosmicality</span></Link>
            //     </div>
                
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className='Logo'>
                    <Link to='/' className='link-tags'><span className='title'>GardenSpace</span></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            {this.props.isadmin &&                       
                                <Link className='link' to='/adminTools'>TOOLS</Link>}
                        </li>
                        <li className="nav-item">
                            <Link className='link' to='/cart'>CART</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='link' to='/shop/category'>SHOP</Link>
                        </li>
                        <li className="nav-item">
                            {(!this.props.user_id)
                                ? <Link className='link' to='/auth/login'><span>LOGIN</span></Link>  
                                : <Link className='link' to='/auth/logout'><span onClick={this.logout}>LOGOUT</span></Link>}
                        </li>
                    </ul>
                </div>
                </nav>
                        
                    
                    {/* {
                        this.props.isadmin &&                       
                            <Link to='/adminTools' className='link-tags'><span className='nav-links'>TOOLS</span></Link>
                    }

                    <Link to='/cart' className='link-tags'><span className='nav-links'>CART</span></Link>
                    <Link to='/shop/category' className='link-tags'><span className='nav-links'>SHOP</span></Link> */}
                    {/* <Link to='/posts' className='link-tags'><span className='nav-links'>BLOG</span></Link> */}
                    {/* <Link to='/about' className='link-tags'><span className='nav-links'>ABOUT</span></Link> */}

                    {/* {(!this.props.user_id)
                        ? <Link to='/auth/login' className='link-tags'><span className='nav-links'>LOGIN</span></Link>  
                        : <Link to='/auth/logout' className='link-tags'><span onClick={this.logout} className='nav-links'>LOGOUT</span></Link>
                    }
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user_id, username, email, isadmin } = reduxState.users_reducer
    return {
        user_id,
        username,
        email,
        isadmin
    }
}

export default withRouter(connect(mapStateToProps, {updateUser})(Nav))