import React, {Component} from 'react'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <span>Create An Account</span>
                <br></br>
                <input placeholder='username'/>
                <br></br>
                <input placeholder='email'/>
                <br></br>
                <input placeholder='password'/>
                <br></br>
                <button>CREATE ACCOUNT</button>
                <br></br>
                <button>Cancel</button>
            </div>
        )
    }
}
export default Register