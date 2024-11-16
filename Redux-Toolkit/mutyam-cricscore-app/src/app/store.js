import {configureStore} from '@reduxjs/toolkit'
import { PlayerApi } from '../services/PlayerApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { teamsApi } from '../services/TeamsApi'
import playersReducer from '../features/Body/Players/PlayersSlice'
import { CricketApi } from '../services/cricketApi'

export const store = configureStore({

    reducer : {

        players : playersReducer,
       

        [PlayerApi.reducerPath] : PlayerApi.reducer,
        [teamsApi.reducerPath] : teamsApi.reducer,
        [CricketApi.reducerPath] : CricketApi.reducer
    },

    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(PlayerApi.middleware, teamsApi.middleware, CricketApi.middleware )
}  
)

setupListeners(store.dispatch)