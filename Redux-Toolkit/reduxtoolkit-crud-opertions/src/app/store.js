import {configureStore} from '@reduxjs/toolkit'
import { productsApi } from '../services/products'
import { todolistApi } from '../services/todos'

export const store = configureStore({

    reducer : {
        
        [productsApi.reducerPath] : productsApi.reducer,

        [todolistApi.reducerPath] : productsApi.reducer


    },

    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware, todolistApi.middleware)

    

    
})