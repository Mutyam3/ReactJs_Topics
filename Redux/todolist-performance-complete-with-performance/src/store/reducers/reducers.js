import {combineReducers} from 'redux'
import counterReducer from './Counter.reducer'
import todolistReducer from './todolist.reducer'



const reducers = combineReducers({counterReducer,todolistReducer})

export default reducers