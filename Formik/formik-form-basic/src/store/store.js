import {combineReducers, createStore} from 'redux'
import formReducer from './Reducers/form.reducer'

var finalReducer = combineReducers({f : formReducer})


var Store = new createStore(finalReducer)

export default Store

