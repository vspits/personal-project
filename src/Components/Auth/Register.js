import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './register.css'
// import {connect} from 'react-redux'
// import {updateUser} from './../../ducks/users/reducer'


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleRegistration = () => {
        const { email, password, username } = this.state
        axios.post('/auth/register', { username, email, password })
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push(`/shop`)
            })
      }

    render(){
        return(
            <div className='Registration'>
                <span className='register-title'>CREATE AN ACCOUNT</span>
                
                <br></br>
                <br></br>
                
                <input type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='username'/>

                <br></br>
                <br></br>
                
                <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='email'/>
                
                <br></br>
                <br></br>
                
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password'/>
                
                <br></br>
                <br></br>
                
                <button className='button' onClick={this.handleRegistration}>CREATE ACCOUNT</button>
                
                <br></br>
                <br></br>
                
                <Link to='/auth/login'><button>Cancel</button></Link>
            </div>
        )
    }
}
export default Register

// const mapStateToProps = (reduxState) => {
//     return {
//         email: reduxState.email,
//         username: reduxState.username,
//         password: reduxState.password
//     }
// }


// export default connect(mapStateToProps, {updateUser})(Register)