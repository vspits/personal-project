import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className='Login'>
                <span className='login-title'>Login</span>

                <br></br>
                <br></br>

                <input placeholder='email'/>
                
                <br></br>
                <br></br>
                
                <input placeholder='password'/>
                
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

export default Login