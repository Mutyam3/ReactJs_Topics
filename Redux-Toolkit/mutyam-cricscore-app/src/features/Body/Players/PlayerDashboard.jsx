import React from 'react'
import { useGetPlayersQuery } from '../../../services/PlayerApi'

function PlayersDashboard()
{

      const {isLoading, data}  = useGetPlayersQuery()


    return (
        <section>
            

            <section className='p-4'>

            
                 <h5>ALL PLAYERS  ( { !isLoading && <span style={{color:'gold'}}>{data.length}</span> })</h5>
                 
                 <div className = 'border border-light rounded d-flex playersDisplay m-2' style={{height : '220px'}} >
                     {
                          !isLoading && (
                              data.map((el)=>{
                                return (
                                    <div className={el.status ? 'clickedPlayer': 'unclickedPlayer'}>
                                        <img src = {el.photo} width='150px' height ='150px'/>
                                        <p >{el.fullName}</p>
                                    </div>
                                )
                              })
                          )  
                     }
                 </div>


            </section>
                  <h5>Teams</h5>

                  
            <section>

            </section>
        </section>
    )
}

export default PlayersDashboard