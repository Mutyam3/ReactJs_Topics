import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'
import { useParams } from 'react-router-dom'
import { useGetTeamsByIdQuery, useGetTeamsQuery } from '../../../services/TeamsApi'
import { addRun, addWicket } from './ScoringSlice'
import ScoringButtons from './ScoringButtons'
import TeamScore from './TeamScore'


function Scoring()
{
       
       const {id} = useParams()
       const scoring   = useSelector(state=> state.scoring)
       const dispatch  = useDispatch()
       const {isLoading: matchLoading, data : matchData} =useGetMatchByIdQuery(id)
       const {isLoading : teamsLoading, data : teamsData} = useGetTeamsQuery()
       console.log(matchData)
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
         if( matchData?.teamAName == matchData?.tossDetails?.tossWon )
         {
            setTeamType('TeamA')
         }
        
             
       },[])


      

    return (
        <>
           {
            
            
           <section>

                    { !matchLoading && 
                        scoring && 
                        <section className='border border-light text-center'>
                             
                             <div className='m-4 p-3 d-flex justify-content-evenly align-items-center  '>
                                <div onClick= {()=>{setTeamType('TeamA')}}>
                                   <img src = {matchData.teamALogo} width = '110px' height='80px'/>
                                   <h5>{teamsNameById(matchData.teamAName)}</h5>
                                </div>


                                <b className='fs-3'>Vs</b>
                                   <div onClick= {()=>{setTeamType('TeamB')}}>
                                        <img src = {matchData.teamBLogo} width = '110px' height='80px'/>
                                        <h5>{teamsNameById(matchData.teamBName)}</h5>
                                   </div>
                                
                             </div>

                             <h5>Scoring Team </h5>
                             <div className=' m-auto p-4  w-75 border border-light rounded-3'> 
                                
                                    {
                                     
                                          teamType === 'TeamA' && 
                                     <>
                                           
                                           <TeamScore type='TeamA' matchData={matchData}  scoring = {scoring.TeamAScore} teamsNameById = {teamsNameById}/>
                                          
                                     </> 
                                    }
                                    {
                                          teamType === 'TeamB' &&  
                                        <> 

                                           <TeamScore type='TeamB' matchData={matchData} scoring = {scoring.TeamBScore} teamsNameById = {teamsNameById}/>

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