import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    
   TeamAScore : {
    type:'TeamAScore',
    score : 0,
    runs  : 0,
    balls : 0,
    totalOvers : [],
    overs : [],
    currentOver: 0,
    oversCount : 0,
    overCompleted:'notCompleted',
    maxOversCount : 20,
    wickets : 0,
    PlayersOut : [],
    battingPlayers : [],
    bowlingAPlayers : [],
    Batsman : 
        { 
          striker :  {playerName : '', runs:0, ballsFaced:0, fours : 0, sixes: 0},
          nonStriker : {playerName : '', runs:0, ballsFaced:0, fours :0, sixes: 0}
        },
    Bowler : {
                playerName : '', overs:0, runs : 0, wickets : 0
             }
   },

   TeamBScore : {
    type:'TeamBScore',
    score : 0,
    runs  : 0,
    balls : 0,
    totalOvers : [],
    overs : [],
    currentOver: 0,
    oversCount : 0,
    overCompleted:'notCompleted',
    maxOversCount : 20,
    wickets : 0,
    PlayersOut : [],
    battingPlayers : [],
    bowlingBPlayers : [],
    Batsman : 
        { striker :  {playerName : '', ballRuns:0, ballsFaced:0, fours : 0, sixes: 0},
          nonStriker : {playerName : '', ballRuns:0, ballsFaced:0, fours :0, sixes: 0}
        },
    Bowler : {
                playerName : '', overs:0, bowlRuns : 0, wickets : 0
             }
   },
}

const scoring = createSlice({

    name:'scoring',

    initialState,

    reducers : {
        addTeamARun : (state, action)=>{
          
                state.TeamAScore.score = state.TeamAScore.score + action.payload.run
                state.TeamAScore.overs.push(action.payload.name)
                
                if(state.TeamAScore.oversCount < state.TeamAScore.maxOversCount && !(action.payload.name =='LB' || action.payload.name =='Bye' ||action.payload.name =='Wide' || action.payload.name =='NB'))
                {
                   
                    
                    state.TeamAScore.balls += 1
                    state.TeamAScore.oversCount=  Math.floor((state.TeamAScore.oversCount + 0.1) * 10) / 10
                    state.TeamAScore.Bowler.overs = state.TeamAScore.oversCount

                    if(state.TeamAScore.balls === 6 )
                        {
                            state.TeamAScore.balls = 0
                            state.TeamAScore.oversCount += 0.4
                            state.TeamAScore.currentOver += 1
                            state.TeamAScore.totalOvers.push({overCount : [...state.TeamAScore.overs]})
                            state.TeamAScore.overCompleted = 'Completed'
                            state.TeamAScore.overs = []

                        }

                        state.TeamAScore.Bowler.bowlRuns += action.payload.run 
                        state.TeamAScore.Batsman.striker.batRuns += action.payload.run 
                        state.TeamAScore.Batsman.striker.ballsFaced++
                        if(action.payload.name==4)
                        {
                           state.TeamAScore.Batsman.striker.fours++
                        }
                        if(action.payload.name==6){
                          state.TeamAScore.Batsman.striker.sixes++
                        }
                        
                   
                 
                }    
                  
        },

       

         handleSwap : (state, action)=>{

              if(action.payload.name=='TeamA'){

                const { striker, nonStriker } = state.TeamAScore.Batsman;
                state.TeamAScore.Batsman.striker = nonStriker 
                state.TeamAScore.Batsman.nonStriker = striker 

              }

              if(action.payload.name=='TeamB'){
                const { striker, nonStriker } = state.TeamBScore.Batsman;
                state.TeamBScore.Batsman.striker = nonStriker 
                state.TeamBScore.Batsman.nonStriker = striker 

              }
                
         },

         addTeamAPlayers : (state, action) =>{
              if(action.payload.name=='striker'){
                      state.TeamAScore.Batsman.striker = action.payload.value
              }

              if(action.payload.name=='nonStriker'){
                     state.TeamAScore.Batsman.nonStriker = action.payload.value
              }
         },

         addTeamBPlayers : (state, action)=>{
                if(action.payload.name=='striker'){
                        state.TeamBScore.Batsman.striker = action.payload.value
                }
  
                if(action.payload.name=='nonStriker'){
                       state.TeamBScore.Batsman.nonStriker = action.payload.value
                }

         },

         addBattingPlayers : (state, action)=>{

                if(action.payload.name=='TeamA'){
                        state.TeamAScore.battingPlayers = action.payload.value
                }
    
                if(action.payload.name =='TeamB'){
                        state.TeamBScore.battingPlayers = action.payload.value
                }
         },

         addBowlingPlayers : (state, action)=>{
                if(action.payload.name=='TeamA'){
                        state.TeamAScore.bowlingAPlayers = action.payload.value
                   }
    
                   if(action.payload.name =='TeamB'){
                        state.TeamBScore.bowlingBPlayers = action.payload.value
                   }
         },

         addBowlerPlayer : (state, action)=>{
               if(action.payload.name=='TeamA'){
                    state.TeamAScore.Bowler = action.payload.value
               }

               if(action.payload.name =='TeamB'){
                    state.TeamBScore.Bowler = action.payload.value
               }
         },

        addTeamBRun : (state, action)=>{
                
                state.TeamBScore.score = state.TeamBScore.score + action.payload.run
                state.TeamBScore.overs.push(action.payload.name)
                
                if(state.TeamBScore.oversCount < state.TeamBScore.maxOversCount && !(action.payload.name =='LB' || action.payload.name =='Bye' ||action.payload.name =='Wide' || action.payload.name =='NB'))
                {
                   
                    
                    state.TeamBScore.balls += 1
                    state.TeamBScore.oversCount=  Math.floor((state.TeamBScore.oversCount + 0.1) * 10) / 10
                    state.TeamBScore.Bowler.overs = state.TeamBScore.oversCount

                    if(state.TeamBScore.balls === 6 )
                        {
                            state.TeamBScore.balls = 0
                            state.TeamBScore.oversCount += 0.4
                            state.TeamBScore.currentOver += 1
                            state.TeamBScore.totalOvers.push({overCount : [...state.TeamBScore.overs]})
                            state.TeamBScore.overCompleted = 'Completed'
                            state.TeamBScore.overs = []

                        }

                        state.TeamBScore.Bowler.bowlRuns += action.payload.run 
                        state.TeamBScore.Batsman.striker.batRuns += action.payload.run 
                        state.TeamBScore.Batsman.striker.ballsFaced++
                        if(action.payload.name==4)
                        {
                           state.TeamBScore.Batsman.striker.fours++
                        }
                        if(action.payload.name==6){
                          state.TeamBScore.Batsman.striker.sixes++
                        }
                        
                   
                 
                }    
        },

        addTeamAWicket : (state, action)=>{

                state.TeamAScore.wickets = state.TeamAScore.wickets + action.payload
                state.TeamAScore.Bowler.wickets++
        },

        addTeamBWicket : (state, action)=>{
      
                state.TeamBScore.wickets = state.TeamBScore.wickets + action.payload
                state.TeamBScore.Bowler.wickets++
        },

        resetIniatialState : (state, action)=>{
           state = {...initialState.TeamAScore}
           state = {...initialState.TeamBScore}

    }
    
    }
})

export const {addTeamARun, addTeamBRun, addTeamBWicket, addTeamAWicket, selectTeamPlayers, addTeamAPlayers, addTeamBPlayers, handleSwap, addBowlerPlayer
        , addBattingPlayers, addBowlingPlayers
} = scoring.actions
const scoringReducer = scoring.reducer
export  default scoringReducer