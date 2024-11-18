import React from 'react'
import { useLocation ,useParams} from 'react-router-dom'
import { useGetMatchByIdQuery, useUpdateMatchMutation } from '../../../services/cricketApi'
import { useGetTeamsByIdQuery, } from '../../../services/TeamsApi'
import TeamASquad from './TeamASquad'
import SquadDashboard from './SquadDashboard'
import Toss from './Toss'


function SelectSquad()
{

   const {id}=  useParams()

   const {isLoading : matchLoading, data : matchData} =  useGetMatchByIdQuery(id)

   const {isLoading : teamALoading , data : teamAData} =  useGetTeamsByIdQuery(matchData?.teamAName)
   const {isLoading : teamBLoading , data : teamBData} =  useGetTeamsByIdQuery(matchData?.teamBName)

   const [selectedPlayers, setSelectedPlayers] = React.useState({
                       teamAXIPlayers : [],
                       teamBXIPlayers : []
   })

   const [step, setStep] = React.useState('TEAMA')

   const [matchPlayersFn]    =   useUpdateMatchMutation()
   


          function handleRemoveTeamA(i)
          {
              
              var temp = [...selectedPlayers.teamAXIPlayers]
                temp = temp.filter((e)=>{
                        if(e.id == i)
                        {
                            return false 
                        }
                        else 
                        {
                            return true
                        }
                })

               setSelectedPlayers({...selectedPlayers, teamAXIPlayers : [...temp]})
          }

          function handleRemoveTeamB(i)
          {
              
              var temp = [...selectedPlayers.teamBXIPlayers]
                temp = temp.filter((e)=>{
                        if(e.id == i)
                        {
                            return false 
                        }
                        else 
                        {
                            return true
                        }
                })

               setSelectedPlayers({...selectedPlayers, teamBXIPlayers : [...temp]})
          }

          function handleSubmit()
          {
               var temp = {...matchData}
                   temp = {...temp, XIplayers : selectedPlayers}

               matchPlayersFn({id:id, match : temp})
          }


    return (
        <section className='d-flex flex-column align-items-center m-5'>
                

            {
                step == 'TEAMA' && 

                <>
                    <SquadDashboard type='teamA'   teamXIPlayers = {selectedPlayers.teamAXIPlayers} handleRemove = {handleRemoveTeamA} />
                    <TeamASquad type='teamA'  teamData = {teamAData} setFn = {setSelectedPlayers} teamXIPlayers={selectedPlayers?.teamAXIPlayers} selectedPlayers={selectedPlayers}/>
                    <div className='w-50 text-center m-5'>
                         <button className='border border-0 p-2 rounded-2' onClick={()=>{setStep('TEAMB')}}>Next</button>
                    </div>
                    
                    
                </>
                    

                
            }
               
            {

                 step == 'TEAMB' && 

                <>
                    <SquadDashboard type='teamB' teamXIPlayers = {selectedPlayers.teamBXIPlayers} handleRemove = {handleRemoveTeamB} />
                    <TeamASquad type='teamB'  teamData = {teamBData} setFn = {setSelectedPlayers} teamXIPlayers={selectedPlayers?.teamBXIPlayers} selectedPlayers={selectedPlayers}/>
                    <div className='w-50 d-flex justify-content-between m-5'>
                        <button className= 'border border-0 p-2 rounded-2' onClick = {()=>{setStep('TEAMA')}}>Prev</button>
                        <button className= 'border border-0 p-2 rounded-2' onClick = {()=>{handleSubmit()}}>Submit</button>
                        <button className='border border-0 p-2 rounded-2' onClick = {()=>{setStep('TOSS')}}>Next</button>
                    </div>
               </>

            }


            {

                step == 'TOSS' && 

                <>
                   
                    <Toss matchData = {matchData && matchData} id = {id}/>
                   
                
                </>

            }
            
        </section>
    )
}

export default SelectSquad