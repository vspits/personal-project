import { combineReducers } from 'redux'
import users_reducer from './users_reducer'
import shop_reducer from './shop_reducer'

export default combineReducers({
    users_reducer,
    shop_reducer
})