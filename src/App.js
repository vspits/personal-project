import React, { Component } from 'react'
import './App.scss'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
// import {PersistGate} from 'redux-persist/lib/integration/react'
import {store, persistor} from './ducks/store'
import Nav from './Components/Nav/Nav'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={<Nav />} persistor={persistor}> */}
          <HashRouter>
            <div className="App">
              <Nav />
              {routes}
            </div>
          </HashRouter>
        {/* </PersistGate> */}
      </Provider>
    )
  }
}

export default App
