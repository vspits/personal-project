import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className='Login'>
                <span>Login</span>
                <br></br>
                <input placeholder='email'/>
                <br></br>
                <input placeholder='password'/>
                <br></br>
                <Link to='/forgotpassword'><span>Forgot Password?</span></Link>
                <br></br>
                <button>LOGIN</button>
                <br></br>
                <span>Don't have an account? <Link to='/auth/register'>Sign Up!</Link></span>
            </div>
        )
    }
}

export default Login