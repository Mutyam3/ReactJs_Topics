import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'
import todolistReducer from '../features/Todolist/todolistSlice'
import productsReducer from '../features/Products/productsSlice'

export const store = configureStore({

    reducer : {
        counter : counterReducer,
        todolist : todolistReducer,
        products : productsReducer
    }
})