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
    bowlersList : [],
    overCompleted:'notCompleted',
    maxOversCount : 20,
    wickets : 0,
    wicketStatus : false,
    playersOut : [],
    battingPlayers : [],
    bowlingPlayers : [],
    Batsman : 
        { 
          striker :  {playerName : '', batRuns:0, ballsFaced:0, fours : 0, sixes: 0},
          nonStriker : {playerName : '', batRuns:0, ballsFaced:0, fours :0, sixes: 0}
        },
    Bowler : {
                playerName : '', overs:0, bowlRuns : 0, wickets : 0
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
    bowlersList : [],
    overCompleted:'notCompleted',
    maxOversCount : 20,
    wickets : 0,
    wicketStatus : false,
    playersOut : [],
    battingPlayers : [],
    bowlingPlayers : [],
    Batsman : 
        { 
          striker :  {playerName : '', batRuns:0, ballsFaced:0, fours : 0, sixes: 0},
          nonStriker : {playerName : '', batRuns:0, ballsFaced:0, fours :0, sixes: 0}
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
        addTeamARun: (state, action) => {
                // state.TeamBScore.wicketStatus = false;
                state.TeamAScore.score += action.payload.run;
                state.TeamAScore.overs.push(action.payload.name);
            
                if (
                    state.TeamAScore.oversCount < state.TeamAScore.maxOversCount &&
                    !(action.payload.name === "LB" || action.payload.name === "Bye" || action.payload.name === "Wide" || action.payload.name === "NB" || action.payload.name === "Out")
                 ) {
                    state.TeamAScore.overCompleted = "notCompleted";
                    state.TeamAScore.balls += 1;
            
                    
                    const totalBalls = state.TeamAScore.balls; // Total balls bowled
                    const completedOvers = Math.floor(totalBalls / 6); // idi overs ni completed aina count ni isthadi
                    const ballsInCurrentOver = totalBalls % 6; // ippudu unna over lo enni balls unnayo isthadi
            
                    state.TeamAScore.oversCount = parseFloat(`${completedOvers}.${ballsInCurrentOver}`); // idi 0.1 ane string ni number ga marustadi 
                    state.TeamAScore.Bowler.ballsBowled = (state.TeamAScore.Bowler.ballsBowled || 0) + 1;

                    // Update bowler's overs count
                    const bowlerCompletedOvers = Math.floor(state.TeamAScore.Bowler.ballsBowled / 6);
                    const bowlerBallsInCurrentOver = state.TeamAScore.Bowler.ballsBowled % 6;
                    state.TeamAScore.Bowler.overs = parseFloat(`${bowlerCompletedOvers}.${bowlerBallsInCurrentOver}`);
                  
                    // Handle over completion for both team and bowler
                    if (state.TeamAScore.balls % 6 === 0) {
                      state.TeamAScore.currentOver += 1; // Increment team current over
                      state.TeamAScore.totalOvers.push({ overCount: [...state.TeamAScore.overs] });
                      state.TeamAScore.overs = []; // Reset team overs array for new over
                      state.TeamAScore.overCompleted = "Completed";
                    }
                    state.TeamAScore.Bowler.bowlRuns += action.payload.run;
                    state.TeamAScore.Batsman.striker.batRuns += action.payload.run;
                    state.TeamAScore.Batsman.striker.ballsFaced++;
            
                    if (action.payload.name == 4) {
                        state.TeamAScore.Batsman.striker.fours++;
                    }
                    if (action.payload.name == 6) {
                        state.TeamAScore.Batsman.striker.sixes++;
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

         addToBowlerList : (state, action)=>{

                 if(action.payload.type=='TeamA'){
                        state.TeamAScore.bowlingPlayers = action.payload.bowlingPlayersArray      
                        state.TeamAScore.bowlersList.push({...action.payload.scoringBowler})
                 }
                 if(action.payload.type=='TeamB'){
                        state.TeamBScore.bowlingPlayers = action.payload.bowlingPlayersArray      
                        state.TeamBScore.bowlersList.push({...action.payload.scoringBowler})
                 }
         },

         addToPlayersOut : (state, action)=>{
               if(action.payload.type=='TeamA'){
                      state.TeamAScore.battingPlayers = action.payload.battingPlayersArray
                      state.TeamAScore.playersOut.push({...action.payload.scoringBatting})
               }
               if(action.payload.type=='TeamB'){
                state.TeamBScore.battingPlayers = action.payload.battingPlayersArray
                state.TeamBScore.playersOut.push({...action.payload.scoringBatting})
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
                        state.TeamAScore.bowlingPlayers = action.payload.value
                   }
    
                   if(action.payload.name =='TeamB'){
                        state.TeamBScore.bowlingPlayers = action.payload.value
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
               
                state.TeamBScore.score += action.payload.run;
                state.TeamBScore.overs.push(action.payload.name);
            
                if (
                    state.TeamBScore.oversCount < state.TeamBScore.maxOversCount &&
                    !(action.payload.name === "LB" || action.payload.name === "Bye" || action.payload.name === "Wide" || action.payload.name === "NB" || action.payload.name === "Out")
                 ) {
                    state.TeamBScore.overCompleted = "notCompleted";
                    state.TeamBScore.balls += 1;
            
                    
                    const totalBalls = state.TeamBScore.balls; // Total balls bowled
                    const completedOvers = Math.floor(totalBalls / 6); // idi overs ni completed aina count ni isthadi
                    const ballsInCurrentOver = totalBalls % 6; // ippudu unna over lo enni balls unnayo isthadi
            
                    state.TeamBScore.oversCount = parseFloat(`${completedOvers}.${ballsInCurrentOver}`); // idi 0.1 ane string ni number ga marustadi 

                    state.TeamBScore.Bowler.ballsBowled = (state.TeamBScore.Bowler.ballsBowled || 0) + 1;
                    const bowlerCompletedOvers = Math.floor(state.TeamBScore.Bowler.ballsBowled / 6);
                    const bowlerBallsInCurrentOver = state.TeamBScore.Bowler.ballsBowled % 6;
                    state.TeamBScore.Bowler.overs = parseFloat(`${bowlerCompletedOvers}.${bowlerBallsInCurrentOver}`);
                  
                    // Handle over completion for both team and bowler
                    if (state.TeamBScore.balls % 6 === 0) {
                      state.TeamBScore.currentOver += 1; // Increment team current over
                      state.TeamBScore.totalOvers.push({ overCount: [...state.TeamBScore.overs] });
                      state.TeamBScore.overs = []; // Reset team overs array for new over
                      state.TeamBScore.overCompleted = "Completed";
                    }
            
                    state.TeamBScore.Bowler.bowlRuns += action.payload.run;
                    state.TeamBScore.Batsman.striker.batRuns += action.payload.run;
                    state.TeamBScore.Batsman.striker.ballsFaced++;
            
                    if (action.payload.name == 4) {
                        state.TeamBScore.Batsman.striker.fours++;
                    }
                    if (action.payload.name == 6) {
                        state.TeamBScore.Batsman.striker.sixes++;
                    }
                }   
        },

        addTeamAWicket : (state, action)=>{
               
                    state.TeamAScore.overCompleted = "notCompleted";
                    state.TeamAScore.balls += 1;
                    
                    const totalBalls = state.TeamAScore.balls; // Total balls bowled
                    const completedOvers = Math.floor(totalBalls / 6); // idi overs ni completed aina count ni isthadi
                    const ballsInCurrentOver = totalBalls % 6; // ippudu unna over lo enni balls unnayo isthadi
            
                    state.TeamAScore.oversCount = parseFloat(`${completedOvers}.${ballsInCurrentOver}`); // idi 0.1 ane string ni number ga marustadi 
                    
                    state.TeamAScore.Bowler.ballsBowled = (state.TeamAScore.Bowler.ballsBowled || 0) + 1;

                    const bowlerCompletedOvers = Math.floor(state.TeamAScore.Bowler.ballsBowled / 6);
                    const bowlerBallsInCurrentOver = state.TeamAScore.Bowler.ballsBowled % 6;
                    state.TeamAScore.Bowler.overs = parseFloat(`${bowlerCompletedOvers}.${bowlerBallsInCurrentOver}`);
                    state.TeamAScore.wickets = state.TeamAScore.wickets + action.payload
                    state.TeamAScore.Bowler.wickets++
                    state.TeamAScore.overs.push('w')
                  
                    // Handle over completion for both team and bowler
                    if (state.TeamAScore.balls % 6 === 0) {
                      state.TeamAScore.currentOver += 1; // Increment team current over
                      state.TeamAScore.totalOvers.push({ overCount: [...state.TeamAScore.overs] });
                      state.TeamAScore.overs = []; // Reset team overs array for new over
                      state.TeamAScore.overCompleted = "Completed";
                    }
        },

        addTeamBWicket : (state, action)=>{
                state.TeamBScore.overCompleted = "notCompleted";
                state.TeamBScore.balls += 1;
                
                const totalBalls = state.TeamBScore.balls; // Total balls bowled
                const completedOvers = Math.floor(totalBalls / 6); // idi overs ni completed aina count ni isthadi
                const ballsInCurrentOver = totalBalls % 6; // ippudu unna over lo enni balls unnayo isthadi
        
                state.TeamBScore.oversCount = parseFloat(`${completedOvers}.${ballsInCurrentOver}`); // idi 0.1 ane string ni number ga marustadi 

                state.TeamBScore.Bowler.ballsBowled = (state.TeamBScore.Bowler.ballsBowled || 0) + 1;

                const bowlerCompletedOvers = Math.floor(state.TeamBScore.Bowler.ballsBowled / 6);
                const bowlerBallsInCurrentOver = state.TeamBScore.Bowler.ballsBowled % 6;
                state.TeamBScore.Bowler.overs = parseFloat(`${bowlerCompletedOvers}.${bowlerBallsInCurrentOver}`);
                state.TeamBScore.wickets = state.TeamBScore.wickets + action.payload
                state.TeamBScore.Bowler.wickets++
                state.TeamBScore.overs.push('w')
                 // oka over aipoyaka em cheyalo ikkada rastuna
                if (ballsInCurrentOver === 0 && state.TeamBScore.balls > 0) {  //6%6==0
                    state.TeamBScore.overCompleted = "Completed";
                    state.TeamBScore.currentOver += 1;
                    state.TeamBScore.totalOvers.push({ overCount: [...state.TeamBScore.overs] }); // Add the completed over
                    state.TeamBScore.overs = []; // Reset for the next over
                }
        },

        resetIniatialState : (state, action)=>{
           state = {...initialState.TeamAScore}
           state = {...initialState.TeamBScore}

        },

        resetPlayers : (state,action)=>{
                if(action.payload.type=='TeamA'){
                      if(action.payload.index=='striker'){
                           state.TeamAScore.Batsman.striker = {...initialState.TeamAScore.Batsman.striker}

                       }
                       if(action.payload.index=='nonStriker'){
                             state.TeamAScore.Batsman.nonStriker = {...initialState.TeamAScore.Batsman.nonStriker}
                       }
                       if(action.payload.index=='bowler'){
                        state.TeamAScore.Bowler = {...initialState.TeamAScore.Bowler}
                       }
           
                     
                }
                if(action.payload.type=='TeamB'){
                        if(action.payload.index=='striker'){
                             state.TeamBScore.Batsman.striker = {...initialState.TeamBScore.Batsman.striker}
  
                         }
                         if(action.payload.index=='nonStriker'){
                               state.TeamBScore.Batsman.nonStriker = {...initialState.TeamBScore.Batsman.nonStriker}
                         }
                         if(action.payload.index=='bowler'){
                          state.TeamBScore.Bowler = {...initialState.TeamBScore.Bowler}
                         }
             
                       
                  }

               
        }
    
    }
})

export const {addTeamARun, addTeamBRun, addTeamBWicket, addTeamAWicket, selectTeamPlayers, addTeamAPlayers, addTeamBPlayers, handleSwap, addBowlerPlayer
        , addBattingPlayers, addBowlingPlayers, addToBowlerList, addToPlayersOut,resetPlayers
} = scoring.actions
const scoringReducer = scoring.reducer
export  default scoringReducer