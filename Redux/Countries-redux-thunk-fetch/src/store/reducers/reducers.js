import {combineReducers} from 'redux'
import counterReducer from './Counter.reducer'
import todolistReducer from './todolist.reducer'
import countriesReducer from './Countries.reducer'



const reducers = combineReducers({counter : counterReducer, todolist : todolistReducer, countries : countriesReducer})

export default reducers