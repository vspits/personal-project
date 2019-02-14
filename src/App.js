import React, { Component } from 'react'
import './App.scss'
import {HashRouter} from 'react-router-dom'
// import {Provider} from 'react-redux'
// import userStore from './ducks/users/store'
import Nav from './Components/Nav/Nav'
import routes from './routes'

class App extends Component {
  render() {
    return (
      // <Provider store={userStore}>
        <HashRouter>
          <div className="App">
            <Nav />
            {routes}
          </div>
        </HashRouter>
      // {/* </Provider> */}
    )
  }
}

export default App
