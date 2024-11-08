import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { useGetPlayersQuery } from '../../../services/PlayerApi'
import { useAddTeamMutation } from '../../../services/TeamsApi'

function CreateTeams()
{
       const {isLoading, data} = useGetPlayersQuery()

       const [addTeamFn] = useAddTeamMutation()
        
       const initialValues =  { 
        teamName : '',
        teamOwner : '',
        players : [
    
        ]}

        const [newTeam, setNewTeam] = React.useState({...initialValues})
        

        function handlePlayersToTeams(obj, id)
        { 
            
               var team = [...newTeam.players]
                team.push({...obj})
                setNewTeam({...newTeam, players:[...team]})    

        }
      

        function handleTeamsToPlayers(obj, id)
        {
              var temp = [...newTeam.players]
                
              temp = temp.filter((el)=>{
                       if(el.id == id)
                       {
                           return false  
                       }
                       else 
                       {
                          return true
                       }
              })

              setNewTeam({...newTeam, players:[...temp]})

        }


        function handleSubmitTeam()
        {
           console.log(newTeam)
            addTeamFn(newTeam).then((res)=>{
                
                setNewTeam({...initialValues})
            })

        }



    return (
         <section className='p-4'>
 
            { isLoading &&  <b>Loading......</b> }
           
            <div className='p-4'>
                 <h5> ADD TEAM </h5>

                 <div>

                 <label>
                        Team Name : 
                       <input type="text" name = "teamName" className = 'field' placeholder='Team Name' onChange={(e)=>{setNewTeam({...newTeam,teamName:e.target.value })}} />
                 </label><br/><br/>


                 <label>
                        Team Owner :
                       <input type="text" name= "teamOwner" className = 'field' placeholder='Team Owner' onChange={(e)=>{setNewTeam({...newTeam,teamOwner:e.target.value })}} />
                 </label> <br/><br/>


               </div>

            </div>


             <div className='p-4'>
                 <h5>ALL PLAYERS  ( { !isLoading && <span style={{color:'gold'}}>{data.length}</span> })</h5>
                 
                 <div className = 'border border-light rounded d-flex playersDisplay m-2' style={{height : '220px'}} >
                     {
                          !isLoading && (
                              data.map((el,ind)=>{
                                return (
                                    <div className={el.status ? 'clickedPlayer': 'unclickedPlayer'} onClick={()=>{handlePlayersToTeams(el,el.id)}}>
                                        <img src = {el.photo} width='150px' height ='150px'/>
                                        <p><b>{el.fullName}</b></p>
                                    </div>
                                )
                              })
                          )  
                     }
                 </div>
                 

             </div>

             <div className='p-4'>
                 <h5>NEW TEAM  { newTeam.players && <span>{newTeam.players.length}</span>}</h5>

                 <div className = 'border border-light rounded m-2 d-flex playersDisplay' style={{height : '220px'}}>
                     {
                         newTeam.players && newTeam.players.map((el)=>{
                            return (
                                    <div className='border border-light text-center' onClick = {()=>{handleTeamsToPlayers(el, el.id)}}>
                                        <img src = {el.photo} width='150px' height ='150px'/>
                                        <p >{el.fullName}</p>
                                    </div>
                                 )
                         })
                     }
                 </div>


             </div>


             <div className='d-flex justify-content-center'>
                   <button className='btn btn-primary p-2 text-light' onClick = {handleSubmitTeam}>Submit</button>
             </div>
                 

        </section>
    )
}

export default CreateTeams