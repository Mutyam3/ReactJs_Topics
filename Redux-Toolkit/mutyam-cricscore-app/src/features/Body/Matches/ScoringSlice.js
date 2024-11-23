import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    
   TeamAScore : {
    
    score : 0,
    runs  : 0,
    balls : 0,
    overs : [],
    oversInDecimals : 0.0,
    oversCount : 0,
    wickets : 0,
    PlayersOut : [],
    battingPlayers : [
         {playerName : '', ballsFaced : '', runs : ''},
         {playerName : '', ballsFaced : '', runs : ''}
    ],
    bowlingPlayers : [

    ],
    currentPlayerIndex : '',
    innings: 0

   },

   TeamBScore : {
    score : 0,
    runs  : 0,
    balls : 0,
    overs : [],
    oversCount : 0,
    wickets : 0,
    PlayersOut : [],
    battingPlayers : [
         {playerName : '', ballsFaced : '', runs : ''},
         {playerName : '', ballsFaced : '', runs : ''}
    ],
    bowlingPlayers : [

    ],
    currentPlayerIndex : '',
    innings: 0
       
   },


}

const scoring = createSlice({

    name:'scoring',

    initialState,

    reducers : {
        addTeamARun : (state, action)=>{
          
                state.TeamAScore.score = state.TeamAScore.score + action.payload
                state.TeamAScore.overs.push(action.payload)
                state.TeamAScore.balls++
                if(state.TeamAScore.balls == 6 )
                {
                    state.TeamAScore.oversInDecimals = state.TeamAScore.oversInDecimals + 0.5
                }
                else 
                {
                    state.TeamAScore.oversInDecimals = state.TeamAScore.oversInDecimals + 0.1
                }
                
                if(state.TeamAScore.balls == 6)
                {
                    state.TeamAScore.oversCount++
                }
                
        },

        addTeamBRun : (state, action)=>{

                state.TeamBScore.score = state.TeamBScore.score + action.payload
        },

        addTeamAWicket : (state, action)=>{

                state.TeamAScore.wickets = state.TeamAScore.wickets + action.payload
        },

        addTeamBWicket : (state, action)=>{
      
                state.TeamBScore.wickets = state.TeamBScore.wickets + action.payload
        },

        resetIniatialState : (state, action)=>{
           state = {...initialState.TeamAScore}
           state = {...initialState.TeamBScore}

    }
    
    }
})

export const {addTeamARun, addTeamBRun, addTeamBWicket, addTeamAWicket} = scoring.actions
const scoringReducer = scoring.reducer
export  default scoringReducer