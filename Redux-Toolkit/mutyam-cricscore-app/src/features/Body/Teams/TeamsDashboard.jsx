import React from 'react'
import { useGetTeamsQuery } from '../../../services/TeamsApi'
import { useSelector } from 'react-redux'
function TeamsDashboard()
{

    const {isLoading, data}   = useGetTeamsQuery()
    const readPlayers = useSelector(state=>state.players)
    console.log(readPlayers)
    return(
        <section>
            {
                isLoading && (<b>Loading.....</b>)
            }
            
            <section>

                <h5>Teams : </h5>

                
                  <div>
                      {

                          !isLoading && data.map((el)=>{
                                 return (
                                    <div className='m-2 p-2'>
                                        <h5>{el.teamName}</h5>
                                        <div className = 'rounded-2 overFlowProp d-flex gap-5' style={{ backgroundColor: 'rgb(28, 26, 26)'}}>
                                             <img src = {el.logo} width = '300px' height = '230px'/>
                                             <div>
                                                <div className='d-flex justify-content-evenly w-75 m-3'>
                                                      <p className='teamsPara  '>Team Name &nbsp; - &nbsp;&nbsp;<b>{el.teamName}</b></p>
                                                      <p className='teamsPara  '>Team Owner &nbsp; - &nbsp;&nbsp;<b>{el.teamOwner}</b></p>
                                                      <p className='teamsPara  '>Players count &nbsp; - &nbsp;&nbsp;<b>{el.players.length}</b></p>
                                                </div>
                                             <div className=' d-flex w-75 playersDisplay rounded-3' style={{height:'120px'}}>
                                                {
                                                    el.players.map((el)=>{
                                                        return(
                                                            <div >
                                                                <img src={el.photo} width ='100px' height = '100px'/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                             </div>
                                             </div>
                                        </div>
                                    </div>
                                 )
                          })
                          
                      }
                  </div>  
                
                    
                
                
            </section>


        </section>
    )
}

export default TeamsDashboard