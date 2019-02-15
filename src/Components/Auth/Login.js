import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {updateUser} from './../../ducks/users/reducer'
import './login.css'
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        const { user_id } = this.props
        if(user_id){
            //boot to other page
            this.props.history.push(`/shop/category`)
        } else {
            //double check sessions
            axios.get(`/api/user`)
                .then(res => {
                    //boot to other page
                    this.props.updateUser(res.data)
                    this.props.history.push(`/shop/category`)
                })
                .catch(err => {
                    //don't boot
                })
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        const { email, password } = this.state
        axios.post(`/auth/login`, {email, password})
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push(`/shop/category`)           
        })
        .catch( err => console.log(err))
    }

    render(){
        return (
            <div className='Login'>
                <span className='login-title'>Login</span>

                <br></br>
                <br></br>

                <input className='inputfield' placeholder='EMAIL'/>
                
                <br></br>
                <br></br>
                
                <input className='inputfield' placeholder='PASSWORD'/>
                
                <br></br>
                <br></br>
                
                <Link to='/forgotpassword'><span>Forgot Password?</span></Link>

                <br></br>
                <br></br>

                <button className='button'>LOGIN</button>

                <br></br>
                <br></br>
                
                <span>Don't have an account? <Link to='/auth/register'>Sign Up!</Link></span>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.user_id
    }
}

export default connect(mapStateToProps, {updateUser})(Login)