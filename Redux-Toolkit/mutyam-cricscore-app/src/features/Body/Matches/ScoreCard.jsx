import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'
import { useParams } from 'react-router-dom'
import { useGetTeamsByIdQuery, useGetTeamsQuery } from '../../../services/TeamsApi'
import ScoreCardTeam from './ScoreCardTeams'
import Cricketball from '../../../assets/bestCricBallAni.png'

function ScoreCard()
{

  
  const {id} = useParams()
  const  {TeamAScore}   = useSelector(state=> state.scoring)
  const  {TeamBScore}   = useSelector(state=>state.scoring)
  const {isLoading: matchLoading, data : matchData} =useGetMatchByIdQuery(id)
  const {isLoading : teamsLoading, data : teamsData} = useGetTeamsQuery()
  const [matchOver, setMatchOver]   =  React.useState(false)
  
     console.log(TeamAScore)
  function teamsNameById(id)
  {   
       if(teamsData)
       {
           return teamsData.find((team)=>{
              return team.id == id
            }).teamName
       }
           
  }

      //  function handleSaveScoreCard(){
            
      //    setMatchOver(true)
         

      //  }


    return (
        <section>
             <div className='text-center'>
                     {/* <p>{matchOver && <>Match Completed</>} 
                        {!matchOver && <><i class="bi bi-dot fs-2 text-primary"><span>Live</span></i></>}</p> */}
                     {/* <button onClick = {()=>{handleSaveScoreCard()}}  disabled = {matchOver} className='m-3 p-2 border border-dark rounded'>{
                                    matchOver && <>Match Score Card</>} 
                                    {!matchOver && <>Live Score Card</>}
                                    </button> */}
             </div>
            {matchLoading && <><img src= {Cricketball} className='cricBall' /> <b>Loading....</b></>}
            {!matchLoading  && 
            <>
            <div className='m-4 p-3 d-flex justify-content-evenly align-items-center  '>
                                <div>
                                   <img src = {matchData.teamALogo} width = '110px' height='80px'/>
                                   <h5>{teamsNameById(matchData.teamAName)}</h5>
                                </div>


                                <b className='fs-3'>Vs</b>
                                   <div>
                                        <img src = {matchData.teamBLogo} width = '110px' height='80px'/>
                                        <h5>{teamsNameById(matchData.teamBName)}</h5>
                                   </div>
                                

            </div>


{
   matchData?.TeamAScoring?.score && matchData?.TeamBScoring?.score && 
   <div className='m-3 text-center d-flex justify-content-center'>
   {
      
      matchData?.TeamAScoring.score > matchData?.TeamBScoring.score &&  <h5 className='border border-dark rounded-3 text-light bg-primary p-2 w-fit-content'> 
          {
             `${teamsNameById(matchData.teamAName)} is won the match against ${teamsNameById(matchData.teamBName)} by 
              ${matchData?.TeamAScoring.score - matchData?.TeamBScoring.score} runs`
          }
        </h5>


   }
    
 {
      matchData?.TeamBScoring > matchData?.TeamAScoring &&  <h5> 
      {
         `${teamsNameById(matchData.teamBName)} is won the match against ${teamsNameById(matchData.teamAName)} by 
          ${matchData?.TeamBScoring.score - matchData?.TeamAScoring.score} runs`
      }
    </h5>
 }
</div>
}
           
              <>{ 
                  <div className='d-flex justify-content-between gap-5'>
                     <ScoreCardTeam scoring={TeamAScore}/>
                     <ScoreCardTeam scoring={TeamBScore}/>
                  </div> 
               }
               </>

               <>{
                 matchData?.TeamAScoring?.score && matchData?.TeamBScoring?.score && 
                  <div className='d-flex justify-content-between gap-5'>
                  <ScoreCardTeam scoring={matchData?.TeamAScoring}/>
                  <ScoreCardTeam scoring={matchData?.TeamBScoring}/>
                  </div>
               }</>
            
                
               </>
            }
           
        </section>
    )
}


export default ScoreCard









       
