import React from 'react'
import ScoringButtons from './ScoringButtons'
import { useParams } from 'react-router-dom'
import { useUpdateMatchMutation } from '../../../services/cricketApi'
import { addBattingPlayers, addBowlerPlayer, addBowlingPlayers, addTeamAPlayers, addTeamBPlayers, addToBowlerList, addToPlayersOut, handleSwap, resetPlayers, selectTeamPlayers } from './ScoringSlice'
import { useDispatch } from 'react-redux'
import TeamASquad from './TeamASquad'
import CricketBat from './../../../assets/cricket-bat.png'
import CricketBall from './../../.././assets/cricket.png'
function TeamScore({type, matchData, scoring, teamsNameById, scoringAll, setTeamType})
{
  
  console.log('scoring::', scoring)
  var {id} = useParams()          
  const [updateMatchFn]  = useUpdateMatchMutation(id)
  const dispatch = useDispatch()
  const [playerIndex, setPlayerIndex] = React.useState('')

  React.useEffect(()=>{
    const {teamAXIPlayers}  =  matchData?.XIplayers
    const {teamBXIPlayers}  =  matchData?.XIplayers

    const teamABattingPlayers =  teamAXIPlayers.map((el,ind)=>{
                             return {playerName : el.fullName, batRuns : 0, ballsFaced: 0, bowlRuns: 0 ,fours: 0, sixes:0 , overs:0, wickets:0, out:false ,id:`${el.fullName.split(" ").join("") +ind}`}
                           })
    const teamBBattingPlayers =  teamBXIPlayers.map((el, ind)=>{
                            return {playerName : el.fullName, batRuns : 0, ballsFaced: 0,bowlRuns: 0 , fours: 0, sixes:0,overs:0, wickets:0 , out:false, id:`${el.fullName.split(" ").join("") +ind}`}
                          })

    const teamABowlingPlayers =  teamAXIPlayers.map((el, ind)=>{
                            return {playerName : el.fullName, batRuns : 0, ballsFaced: 0,bowlRuns: 0 , fours: 0, sixes:0,overs:0, wickets:0, out:false, id:`${el.fullName.split(" ").join("") +ind}` }
                          })
    const teamBBowlingPlayers =  teamBXIPlayers.map((el, ind)=>{
                           return {playerName : el.fullName, batRuns : 0, ballsFaced: 0,bowlRuns: 0 , fours: 0, sixes:0,overs:0, wickets:0, out:false, id:`${el.fullName.split(" ").join("") +ind}` }
                         })

    dispatch(addBattingPlayers({name:'TeamA', value:teamABattingPlayers}))
    dispatch(addBattingPlayers({name:'TeamB', value:teamBBattingPlayers}))

    dispatch(addBowlingPlayers({name: 'TeamA', value:teamBBowlingPlayers}))
    dispatch(addBowlingPlayers({name: 'TeamB', value:teamABowlingPlayers}))




  },[matchData])


 React.useEffect(()=>{

    // console.log('scoringbowler::', scoring.Bowler)
   if(scoring.overCompleted=='Completed') 
   {
    const bowlingPlayersArray  = scoring.bowlingPlayers.map((el)=>{
      if(el.id==scoring.Bowler.id)
      {
           el = scoring.Bowler
           
      }
      return el 
      
        })
      dispatch(addToBowlerList({scoringBowler: scoring.Bowler,bowlingPlayersArray, type:type}))
   }
   
     
  //  console.log('idi over completed:: a',{...matchData, TeamAScoring:{...scoringAll.TeamAScore}}) 
  //   updateMatchFn({...matchData, ...scoring})

 },[scoring.overCompleted=='Completed'])

React.useEffect(()=>{
     
  
     if(scoring.wickets == 10 && type=='TeamA' ){
           console.log('idi wickets:: a',{...matchData, TeamAScoring:{...scoringAll.TeamAScore}}) 
           var temp = {...matchData}
           temp = {...temp, TeamAScoring:{...scoringAll.TeamAScore}}
           updateMatchFn({id:id, match : temp}).then(()=>{
            if(type=='TeamA'){
              setTeamType('TeamB')
            }
            if(type=='TeamB'){
              setTeamType('TeamA')
            }
                 
          })

         
     }

     if(scoring.wickets ==10 && type=='TeamB'){
        console.log('mass:: a',{...matchData, TeamBScoring:{...scoringAll.TeamBScore}})
        var temp = {...matchData}
        temp = {...temp, TeamBScoring:{...scoringAll.TeamBScore}}
        updateMatchFn({id:id, match : temp}).then(()=>{
           
       })
     }

},[scoring.wickets])


 React.useEffect(()=>{
        
     if(playerIndex=='striker'){
         console.log('nn', scoring.Batsman.striker)
        const battingPlayersArray = scoring.battingPlayers.map((el)=>{
               if(el.id==scoring.Batsman.striker.id){
                   return {...scoring.Batsman.striker,out:true} 
               }
               return el
        })
        // console.log('babu::', battingPlayersArray)
        dispatch(addToPlayersOut({type:type, scoringBatting: scoring.Batsman.striker, battingPlayersArray}))
        dispatch(resetPlayers({type:type, index: playerIndex}))
     }
     if(playerIndex=='nonStriker'){
      console.log('nn', scoring.Batsman.nonStriker)
     const battingPlayersArray = scoring.battingPlayers.map((el)=>{
            if(el.id==scoring.Batsman.nonStriker.id){
                return {...scoring.Batsman.nonStriker,out:true} 
            }
            return el
     })
    //  console.log('babu::', battingPlayersArray)
     dispatch(addToPlayersOut({type:type, scoringBatting: scoring.Batsman.nonStriker, battingPlayersArray}))
     dispatch(resetPlayers({type:type, index: playerIndex}))
    }

       setPlayerIndex('') 
   
 },[playerIndex, scoring.overCompleted=='Completed'])
    
  
 


  function handleStrikerPlayers(e){
    if(type=='TeamA'){
      const player = JSON.parse(e.target.value)
      dispatch(addTeamAPlayers({value:player , name: 'striker'}))
    }
    if(type=='TeamB'){
      const player = JSON.parse(e.target.value)
      dispatch(addTeamBPlayers({value: player, name: 'striker'}))
    }

  }

  function handleNonStrikerPlayers(e)
  {
    if(type=='TeamA'){
      const player = JSON.parse(e.target.value)
      dispatch(addTeamAPlayers({value: player, name: 'nonStriker'}))
    }
    if(type=='TeamB'){
      const player = JSON.parse(e.target.value)
      dispatch(addTeamBPlayers({value: player, name: 'nonStriker'}))
    }
  }

  function handleBowler(e){

    if(type='TeamA'){
      const player = JSON.parse(e.target.value)
      dispatch(addBowlerPlayer({value:player, name:'TeamA'}))
    }
    if(type='TeamB'){
      const player = JSON.parse(e.target.value)
      dispatch(addBowlerPlayer({value:player, name:'TeamB'}))
    }
  }

  function handleActionPlayers(name){

    if(name=='striker'){
      setPlayerIndex('striker')
      
    }
    if(name=='nonStriker'){
      setPlayerIndex('nonStriker')
     
    }
    if(name=='bowler'){
      dispatch(resetPlayers({type:type, index:name}))
    }

  }


    return (
        <section className='d-flex flex-column justify-content-between'>
               
               <div>
                 <div className='d-flex p-5 justify-content-between w-50 m-auto border border-light rounded-3'>
                    <div className = 'p-2 '>
                      {    type=='TeamA' && <>
                          <img src={matchData.teamALogo} width='120px' height='80px'/> 
                          <h5>{teamsNameById(matchData.teamAName)}</h5>
                          </>
                      }
                       
                       {    type=='TeamB' && <>
                          <img src={matchData.teamBLogo} width='120px' height='80px'/> 
                          <h5>{teamsNameById(matchData.teamBName)}</h5>
                          </>
                      }
                    </div>

                    <div className = 'm-2 '>
                        <h5>Score </h5>
                     
                        <h1>{scoring.score}/{scoring.wickets}</h1>
  
                    </div>

                 </div>
                 <p className='fs-5'>Overs - <span>{scoring.oversCount}/20</span></p>
                 </div>


                    <div className='d-flex jus'>

                         <div className='border border-light p-4 m-2 w-50'>
                                <div>
                                 <p>Over : {scoring.currentOver} 
                                  </p> 
                                  <p className='border border-2 rounded-3 p-2 w-50 m-auto bg-light text-dark'>
                                    {
                                      scoring.overs.toString()
                                    }
                                  </p>
                                </div> 

                                <div className='border border-2 rounded-3 p-2 m-2'>

                                  <div>
                                    <div className='d-flex justify-content-between bg-warning text-dark p-2'><span></span><span>Batsman</span><span></span> <span></span><span>R</span> <span>B</span><span>4s</span><span>6s</span></div>
                                    <div className='d-flex justify-content-between'>
                                       <p className='d-flex gap-3'>
                                          {
                                              scoring?.Batsman?.striker?.playerName
                                          }
                                          <i class="bi bi-pencil-square" onClick={()=>{handleActionPlayers('striker')}}></i>
                                          <img src={CricketBat} width='20px'/>
                                       </p>
                                        
                                       
                                       <span>{scoring?.Batsman?.striker?.batRuns}</span>
                                       <span>{scoring?.Batsman?.striker?.ballsFaced}</span>
                                       <span>{scoring?.Batsman?.striker?.fours}</span>
                                       <span>{scoring?.Batsman?.striker?.sixes}</span>
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                       <p className='d-flex gap-3'>
                                          {
                                              scoring?.Batsman?.nonStriker?.playerName
                                          }
                                          <i class="bi bi-pencil-square" onClick={()=>{handleActionPlayers('nonStriker')}}></i>
                                       </p>
                                       
                                       <span>{scoring?.Batsman?.nonStriker?.batRuns}</span>
                                       <span>{scoring?.Batsman?.nonStriker?.ballsFaced}</span>
                                       <span>{scoring?.Batsman?.nonStriker?.fours}</span>
                                       <span>{scoring?.Batsman?.nonStriker?.sixes}</span>
                                    </div>
                                  </div>

                                  <div>
                                  <div className='d-flex justify-content-between bg-warning text-dark p-2' ><span></span><span>Bowler</span> <span>Ov</span> <span>R</span><span>W</span></div>
                                    <div className='d-flex justify-content-between'>
                                       <p className='d-flex gap-3'>
                                          {
                                              scoring?.Bowler?.playerName
                                          }
                                          <i class="bi bi-pencil-square" onClick={()=>{handleActionPlayers('bowler')}}></i>
                                          <img src={CricketBall} width='20px'/>
                                       </p>
                                       
                                       <span>{scoring?.Bowler?.overs}</span>
                                       <span>{scoring?.Bowler?.bowlRuns}</span>
                                       <span>{scoring?.Bowler?.wickets}</span>
                                    </div>
                                  </div>
                                 

                                </div>
                                <button className='m-2 border border-2 rounded-2' onClick={()=>{dispatch(handleSwap({name:type}))}}>Swap Batsman</button>
                         </div>

                         <ScoringButtons type={type} />

                    </div>

                    <div>
                         <p>Select Batsman - striker  &nbsp;&nbsp;&nbsp;
                         <select onChange={(e)=>{handleStrikerPlayers(e)}}>
                            <option value={null} disabled selected >--Select option--</option>
                             { type=='TeamA' && 
                                  scoring?.battingPlayers?.map((el)=>{
                                        return <option value={JSON.stringify(el)} disabled={el.out}>{el.playerName}</option>
                                  })
                             }
                             {
                              type=='TeamB' && 
                                  scoring?.battingPlayers?.map((el)=>{
                                      return <option value={JSON.stringify(el)} disabled={el.out}>{el.playerName}</option>
                                })
                            
                             }
                         </select> 
                         </p>

                         <p>Select Batsman - Non-striker  &nbsp;&nbsp;&nbsp;
                         <select onChange={(e)=>{ handleNonStrikerPlayers(e)}}>
                            <option value={null} disabled selected>--Select option--</option>
                             { type=='TeamA' && 
                                  scoring?.battingPlayers?.map((el)=>{
                                        return <option value={JSON.stringify(el)} disabled={el.out}>{el.playerName}</option>
                                  })
                             }
                             {
                              type=='TeamB' && 
                                    scoring?.battingPlayers?.map((el)=>{
                                      return <option value={JSON.stringify(el)} disabled={el.out}>{el.playerName}</option>
                                })
                            
                             }
                         </select> 
                         </p>

                         <p>Select Bowler  &nbsp;&nbsp;&nbsp;

                         <select onChange={(e)=>{handleBowler(e)}}>
                              <option value={null} disabled selected>--Select option--</option>
                              {console.log(scoring?.bowlingPlayers)}
                             { type=='TeamA' && 
                                         
                                  scoring?.bowlingPlayers?.map((el)=>{
                                        return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                  })
                             }
                             {
                              type=='TeamB' && 
                                    scoring?.bowlingPlayers?.map((el)=>{
                                      return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                })
                            
                             }
                         </select>
                         </p>
                    </div>
                    
        </section>
    )
}

export default TeamScore