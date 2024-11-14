import React from 'react'
import { useGetPlayersQuery } from '../../../services/PlayerApi'
import { useDispatch, useSelector } from 'react-redux'
import { addInitialStorePlayers } from './PlayersSlice'

function PlayersDashboard()
{

      const {isLoading, data}  = useGetPlayersQuery()

      const [playerData, setPlayerData] = React.useState({})

      console.log(playerData)


    return (
        <section>
            

            <section className='p-4'>

            
                 <h5>ALL PLAYERS  ( { !isLoading && <span style={{color:'gold'}}>{data.length}</span> })</h5>
                 
                 <div className = ' rounded-2 d-flex playersDisplay m-2' style={{height : '205px'}} >
                     {
                          !isLoading && (
                              data.map((el)=>{
                                return (
                                    <div className={el.status ? 'clickedPlayer': 'unclickedPlayer'} onClick ={()=>{setPlayerData(el)}}>
                                        <img src = {el.photo} width='150px' height ='150px'/>
                                        <p >{el.fullName}</p>
                                    </div>
                                )
                              })
                          )  
                     }
                 </div>


            </section>


                  

                  
               <section className='p-4'>

                   <h5>PLAYERS DATA</h5>
                        {
                            playerData && (
                                
                                <div className='m-4 p-4 d-flex align-items-center justify-content-evenly'>
                                       <div className='d-flex flex-column justify-content-evenly' style={{height:'300px'}}>
                                              <input type='text' className='field text-center manaColor' value={playerData.fullName} placeholder='Full Name'/>

                                              <input type='text' className='field text-center manaColor' value= {playerData.dateOfBirth} placeholder='Date Of Birth'/>

                                              <input type='text' className='field text-center manaColor' value= {playerData.battingStyle} placeholder='Batting Style'/>


                                       </div>

                                       <div className='border border-light rounded-4 overFlowProp' style={{width :'350px', height : '350px'}}>
                                              <img src= {playerData.photo} width ='350px' height = '350px'/>
                                       </div>

                                       <div className='d-flex flex-column justify-content-evenly' style={{height:'300px'}}>

                                               <input type='text' className='field text-center manaColor' value={playerData.emailId} placeholder='Full Name'/>

                                               <input type='text' className='field text-center manaColor' value= {playerData.phoneNumber} placeholder='Date Of Birth'/>

                                               <input type='text' className='field text-center manaColor' value= {playerData.bowlingStyle} placeholder='Batting Style'/>


                                       </div>
                                </div>
                            )
                        }


                 </section>
        </section>
    )
}

export default PlayersDashboard