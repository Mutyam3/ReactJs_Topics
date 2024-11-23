import {configureStore} from '@reduxjs/toolkit'
import { PlayerApi } from '../services/PlayerApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { teamsApi } from '../services/TeamsApi'
import playersReducer from '../features/Body/Players/PlayersSlice'
import { CricketApi } from '../services/cricketApi'
import scoringReducer from '../features/Body/Matches/ScoringSlice'

export const store = configureStore({

    reducer : {

        players : playersReducer,
        scoring : scoringReducer ,
       

        [PlayerApi.reducerPath] : PlayerApi.reducer,
        [teamsApi.reducerPath] : teamsApi.reducer,
        [CricketApi.reducerPath] : CricketApi.reducer
    },

    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(PlayerApi.middleware, teamsApi.middleware, CricketApi.middleware )
}  
)

setupListeners(store.dispatch)