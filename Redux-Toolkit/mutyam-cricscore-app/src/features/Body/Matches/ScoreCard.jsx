import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'
import { useParams } from 'react-router-dom'
import { useGetTeamsByIdQuery, useGetTeamsQuery } from '../../../services/TeamsApi'
import ScoreCardTeam from './ScoreCardTeams'

function ScoreCard()
{

  
  const {id} = useParams()
  const  {TeamAScore}   = useSelector(state=> state.scoring)
  const  {TeamBScore}   = useSelector(state=>state.scoring)
  const {isLoading: matchLoading, data : matchData} =useGetMatchByIdQuery(id)
  const {isLoading : teamsLoading, data : teamsData} = useGetTeamsQuery()
  
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


    return (
        <section>

            
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

            
               <div className='d-flex justify-content-between gap-5'>
                     <ScoreCardTeam scoring={TeamAScore}/>
                     <ScoreCardTeam scoring={TeamBScore}/>
               </div>
            
        
        
        </section>
    )
}


export default ScoreCard









       
