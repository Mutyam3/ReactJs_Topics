import React from 'react'
import ScoringButtons from './ScoringButtons'
import { useParams } from 'react-router-dom'
import { useUpdateMatchMutation } from '../../../services/cricketApi'
import { addBattingPlayers, addBowlerPlayer, addTeamAPlayers, addTeamBPlayers, handleSwap, selectTeamPlayers } from './ScoringSlice'
import { useDispatch } from 'react-redux'
import TeamASquad from './TeamASquad'

function TeamScore({type, matchData, scoring, teamsNameById, scoringAll})
{
  console.log('scoring ::', scoring)

  var {id} = useParams()          
  const [updateMatchFn]  = useUpdateMatchMutation(id)
  const dispatch = useDispatch()

  if(scoring.overCompleted=='Completed'){

       console.log('mass:: a',{...matchData, scoring:{...scoring}}) 
      
        //  updateMatchFn({...matchData, ...scoring})
  }


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

console.log("mmm::", scoring.battingPlayers)
// console.log('bbb::', scoring.bowlingBPlayers)
console.log('mm', scoring.Batsman.striker)


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
                                    <div className='d-flex justify-content-between bg-warning text-dark p-2'><span></span><span>Batsman</span> <span>R</span> <span>B</span><span>4s</span><span>6s</span></div>
                                    <div className='d-flex justify-content-between'>
                                       <p className='d-flex gap-3'>
                                          {
                                              scoring?.Batsman?.striker?.playerName
                                          }
                                          <i class="bi bi-pencil-square"></i>
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
                                          <i class="bi bi-pencil-square"></i>
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
                                          <i class="bi bi-pencil-square"></i>
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
                                  scoring.battingPlayers.map((el)=>{
                                        return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                  })
                             }
                             {
                              type=='TeamB' && 
                                   scoring.battingPlayers.map((el)=>{
                                      return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                })
                            
                             }
                         </select> 
                         </p>

                         <p>Select Batsman - Non-striker  &nbsp;&nbsp;&nbsp;
                         <select onChange={(e)=>{ handleNonStrikerPlayers(e)}}>
                            <option value={null} disabled selected>--Select option--</option>
                             { type=='TeamA' && 
                                  scoring?.battingPlayers.map((el)=>{
                                        return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                  })
                             }
                             {
                              type=='TeamB' && 
                                    scoring?.battingPlayers.map((el)=>{
                                      return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                })
                            
                             }
                         </select> 
                         </p>

                         <p>Select Bowler  &nbsp;&nbsp;&nbsp;

                         <select onChange={(e)=>{handleBowler(e)}}>
                              <option value={null} disabled selected>--Select option--</option>
                             { type=='TeamA' && 
                                  scoringAll.TeamBScore.bowlingBPlayers?.map((el)=>{
                                        return <option value={JSON.stringify(el)}>{el.playerName}</option>
                                  })
                             }
                             {
                              type=='TeamB' && 
                              scoringAll.TeamAScore.bowlingAPlayers?.map((el)=>{
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