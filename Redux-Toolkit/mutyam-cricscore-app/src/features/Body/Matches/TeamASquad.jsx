import React from 'react'
import { useLazyGetTeamsByIdQuery } from '../../../services/TeamsApi'

function TeamASquad({teamData, setFn, teamXIPlayers, selectedPlayers, type})
{
    function handlePlayersToTeam(el)
    {
        if(type=='teamA')
        {
            setFn({...selectedPlayers, teamAXIPlayers : [...teamXIPlayers, {...el}]})
        }
        if(type=='teamB')
        {
            setFn({...selectedPlayers, teamBXIPlayers : [...teamXIPlayers, {...el}]})
        }
    }

    

    return(
        
        <section className='d-flex bg-primary w-75 playersDisplay rounded-3'>
                     {
                           teamData && teamData.players.map((el)=>{
                                  return (
                                   <div className=' border border-dark' onClick={()=>{handlePlayersToTeam(el)}}>
                                       <img src={el.photo} width = '100px' height='100px'/>
                                       <p>{el.fullName}</p>
                                   </div>
                                  )
                           })
                     }
                   
       </section>


    )
}


export default TeamASquad