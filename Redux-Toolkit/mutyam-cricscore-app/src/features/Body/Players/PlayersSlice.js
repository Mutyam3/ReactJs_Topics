import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    players : [],

}

export const playersSlice = createSlice({

    name : 'playersSlice',
    initialState,
    reducers : {
        addInitialStorePlayers: (state, action)=>{

            state.players = [...action.payload]
        },

        addStorePlayers : (state, action)=>{

            state.players= [...state.players, {...action.payload}]
        }
    }

})


export const {addStorePlayers, addInitialStorePlayers} = playersSlice.actions

const playersReducer = playersSlice.reducer
export  default playersReducer
