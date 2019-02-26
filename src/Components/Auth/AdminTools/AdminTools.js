import React, {Component} from 'react'
import './adminTools.css'

class AdminTools extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className='AdminTools'>

                <span className='admin-tools-title'>Admin Tools</span>

                <br />
                <br />
                <br />

                <span>Search orders:</span>
                <br />
                <input placeholder='Order Number' type='integer'/>

                <br />
                <br />
                <br />

                <span>Search User:</span>
                <br />
                <input placeholder='User ID'/>

                <br />
                <br />
                <br />

                <span>Add Product:</span>
                <br />
                <input placeholder='Product Title' type='text'/>
                <br />
                <input placeholder='Product Price' type='integer'/>
                <br />
                <input placeholder='Image URL' type='text'/>
                <br />
                <select>
                    <option>Litfam Essential</option>
                    <option>Eggstra Money</option>
                    <option>yeet(negativity)</option>
                </select>
                <br />
                <textarea rows='10' cols='50' className='' id='description-textarea' placeholder='Description' type='text' />
                <br />
                
            </div>
        )
    }
}

export default AdminTools