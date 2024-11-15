import React from 'react'

function TeamASquad({teamAData})
{
    return(
        
        <section className='d-flex bg-primary w-75 playersDisplay rounded-3'>
                     {
                           teamAData && teamAData.players.map((el)=>{
                                  return (
                                   <div className=' border border-dark'>
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