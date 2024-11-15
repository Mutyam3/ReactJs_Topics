import React from 'react'
import { useLocation } from 'react-router-dom'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'
import { useGetTeamsByIdQuery, useGetTeamsQuery } from '../../../services/TeamsApi'
import TeamASquad from './TeamASquad'

function SelectSquad()
{
   var { state } =   useLocation()
//    console.log(state)
 

   const [manateams, setmanaTeams] = React.useState({teamAData : [], teamBData : []})

   const {isLoading : teamALoading , data :teamAData} =  useGetTeamsByIdQuery(state.teamAId)
   const {isLoading : teamBLoading , data :teamBData} = useGetTeamsByIdQuery(state.teamBId)

//    console.log(teamAData)
//    console.log(teamBData)


    return (
        <section className='d-flex flex-column align-items-center'>
                
               <h5>Select squad</h5>

               <section className='teamBg' style={{width:'100%', height:'500px'}}>
                    
               </section>

               <TeamASquad teamAData = {teamAData}/>

               <section>
                    {

                    }
               </section>

        </section>
    )
}

export default SelectSquad