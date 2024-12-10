import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetMatchByIdQuery, useLazyGetMatchByIdQuery } from '../../../services/cricketApi'
import { useParams } from 'react-router-dom'
import { useGetTeamsByIdQuery, useGetTeamsQuery } from '../../../services/TeamsApi'
import { addBattingPlayers, addBowlerPlayer, addBowlingPlayers, addRun, addWicket } from './ScoringSlice'
import ScoringButtons from './ScoringButtons'
import TeamScore from './TeamScore'
import Cricketball from '../../../assets/bestCricBallAni.png'
import batIcon from '../../../assets/batIcon.webp'


function Scoring()
{
       
       const {id} = useParams()
       const scoring   = useSelector(state=> state.scoring)
       const dispatch  = useDispatch()
       const {isLoading: matchLoading, data : matchData} =useGetMatchByIdQuery(id)
       const {isLoading : teamsLoading, data : teamsData} = useGetTeamsQuery()
       const [getMatchDataFn] = useLazyGetMatchByIdQuery()
       console.log('firstMatchData::',matchData)
       const [teamType, setTeamType] = React.useState('')

  

       function teamsNameById(id)
       {   
            if(teamsData)
            {
                return teamsData.find((team)=>{
                   return team.id == id
                 }).teamName
            }
                
       }

     

       React.useEffect(()=>{
       
         

         if( matchData?.teamBName === matchData?.tossDetails?.tossWon)
            {
               if(matchData?.tossDetails?.decidedTo === "bat" ){
                  setTeamType('TeamB') // b batting chestadi
               }
               if(matchData?.tossDetails?.decidedTo === "bowl")
               {
                  setTeamType('TeamA') // a bowling chestadi
               }
               
            }

            if( matchData?.teamAName === matchData?.tossDetails?.tossWon)
               {
                  if(matchData?.tossDetails?.decidedTo === "bat" ){
                    setTeamType('TeamA')  // a batting chestadi
                  }
                  if(matchData?.tossDetails?.decidedTo === "bowl")
                  {
                    setTeamType('TeamB')  // b batting chestadi
                  }
                  
               }
         getMatchDataFn(id)
             
       },[])


   function handleStartGame(){
      console.log('mutyam:: ',matchData)
      if(matchData?.XIplayers){
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
      }
  

   }
     
  

    return (
        <>
          
          
           {
            
            
            
           <section>
                     {
                        matchLoading  && <><img src= {Cricketball} className='cricBall' /> <b>Loading....</b></>
                     }

                    { !matchLoading && 
                        scoring && 
                        <section className='text-center'>
                             
                             <div className='m-4 p-3 d-flex justify-content-evenly align-items-center  '>
                                <div onClick= {()=>{setTeamType('TeamA')}}>
                                   <img src = {matchData?.teamALogo} width = '110px' height='80px'/>
                                   <h5>{teamsNameById(matchData?.teamAName)}</h5>
                                   <>{
                                          (matchData?.teamAName === matchData?.tossDetails?.tossWon) ? 
                                          (matchData?.tossDetails?.decidedTo === "bat" ? <img src= {batIcon} alt='Bat' width='50px' className='cricBall'/> : <img src= {Cricketball} alt='Bowl' width='50px' className='cricBall'/> ) : 
                                           <></>
                                           

                                      }</>
                                    
                                </div>


                                <b className='fs-3'>Vs</b>
                                   <div onClick= {()=>{setTeamType('TeamB')}}>
                                        <img src = {matchData?.teamBLogo} width = '110px' height='80px'/>
                                        <h5>{teamsNameById(matchData?.teamBName)}</h5>
                                        <>{
                                          (matchData?.teamBName === matchData?.tossDetails?.tossWon) ? 
                                          (matchData?.tossDetails?.decidedTo === "bat" ? <img src= {batIcon} alt='Bat' width='50px' className='cricBall'/> : <img src= {Cricketball} alt='Bowl' width='50px' className='cricBall'/> ) : 
                                           <></>
                                        }</>
                                   </div>
                                
                             </div>

                             <div className='m-2 '>
                                <button onClick = {()=>{handleStartGame()}} className='border-0 rounded-3 bg-primary text-light'>Start Giving Score</button>
                             </div>
                             
                             <h5>Scoring Team </h5>
                             
                             <div className=' m-auto p-4  w-75 border border-light rounded-3'> 
                                
                                    {
                                     
                                          teamType === 'TeamA' && 
                                     <>
                                           
                                           <TeamScore type='TeamA' matchData={matchData} setTeamType={setTeamType} scoring = {scoring.TeamAScore} scoringAll = {scoring} 
                                                  selectPlayers = {matchData.TeamAScoring} teamsNameById = {teamsNameById}/>
                                          
                                     </> 
                                    }
                                    {
                                          teamType === 'TeamB' &&  
                                        <> 

                                           <TeamScore type='TeamB' matchData={matchData} setTeamType={setTeamType} scoring = {scoring.TeamBScore} scoringAll = {scoring} 
                                                       selectPlayers =  {matchData.TeamBScoring}  teamsNameById = {teamsNameById}/>

                                        </>
                                    }
                                     
                              
                             </div>

                           

                        </section>

                      

                     }
                   

                  


           </section>
       }

       
    </>
    )
}

export default Scoring