import { createStore } from 'redux'
// import {persistStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import combineReducers from './reducers/index'

export const store = createStore(combineReducers)
// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     stateReconciler: autoMergeLevel2
// }

// const pReducer = persistReducer(persistConfig, combineReducers)

// export const store = createStore(pReducer)
// export const persistor = persistStore(store)