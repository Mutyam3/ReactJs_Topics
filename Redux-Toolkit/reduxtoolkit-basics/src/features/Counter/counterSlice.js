import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    count : 0

}

export const counterSlice = createSlice(
    {
        name : 'Counter',
        initialState,

        reducers : {

            incCount : (state, action)=>{
               
                   state.count++
            },

            decCount : (state, action) =>{
                 
                state.count--
            },

            resCount : (state, action)=>{

                state.count = initialState.count 
            }


        }

    }
)

export const {incCount, decCount, resCount} = counterSlice.actions

const counterReducer = counterSlice.reducer 

export default counterReducer