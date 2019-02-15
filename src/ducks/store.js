import { createStore } from 'redux'
import reducer from './users/reducer'

const store = createStore(reducer)
export default store