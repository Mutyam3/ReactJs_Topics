import {configureStore} from '@reduxjs/toolkit'
import { PlayerApi } from '../services/PlayerApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { teamsApi } from '../services/TeamsApi'

export const store = configureStore({

    reducer : {
                  
        [PlayerApi.reducerPath] : PlayerApi.reducer,
        [teamsApi.reducerPath] : teamsApi.reducer
    },

    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(PlayerApi.middleware, teamsApi.middleware )
}  
)

setupListeners(store.dispatch)