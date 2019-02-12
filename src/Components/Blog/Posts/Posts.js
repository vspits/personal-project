import React, { Component } from 'react'
import './posts.css'

class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className='PostsComponent'>
                <span className='coming-soon'>Blog posts are coming soon!</span>
            </div>
        )
    }
}
export default Posts