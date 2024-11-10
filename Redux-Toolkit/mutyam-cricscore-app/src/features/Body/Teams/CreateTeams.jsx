import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { useGetPlayersQuery } from '../../../services/PlayerApi'
import { useAddTeamMutation } from '../../../services/TeamsApi'
import { useGetTeamLogosQuery } from '../../../services/cricketApi'

function CreateTeams()
{
       const {isLoading : isLoadingPlayers, data: playersData} = useGetPlayersQuery()

       const [addTeamFn] = useAddTeamMutation()

       const {isLoading: isLoadingTeamLogos, data : teamLogosData} = useGetTeamLogosQuery()

    

       
        
       const initialValues =  { 
        teamName : '',
        teamOwner : '',
        logo : '',
        players : [
    
        ]}

        const [newTeam, setNewTeam] = React.useState({...initialValues})

        const [teamLogo, setTeamLogo] = React.useState('')
        

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


        function handleTeamLogo(e)
        {
            setTeamLogo(e)
            setNewTeam({...newTeam, logo : e})
        }

        function handleLogoInput(e)
        {
            console.log(e.target.value)
            const file = e.target.files[0]
            console.log(file)
            if(file)
            {
                const reader = new FileReader()

                reader.onload = (ev)=>{
                    console.log(ev.target.result)
                    setTeamLogo(ev.target.result)
                    setNewTeam({...newTeam, logo : ev.target.result})
                }
                reader.readAsDataURL(file)
            }
        }



    return (
         <section className='p-4'>
 
            { isLoadingPlayers &&  <b>Loading......</b> }
           
            <h5> ADD TEAM </h5>
             
            <div className='p-4 d-flex justify-content-evenly align-items-center'>
                 

                 <div className='w-25'>

                 <label>

                        Team Name : 
                       <input type="text" name = "teamName" className = 'field' placeholder='Team Name' onChange={(e)=>{setNewTeam({...newTeam,teamName:e.target.value })}} />

                 </label><br/><br/>


                 <label>

                        Team Owner :
                       <input type="text" name= "teamOwner" className = 'field' placeholder='Team Owner' onChange={(e)=>{setNewTeam({...newTeam,teamOwner:e.target.value })}} />


                 </label><br/><br/>

                 <label>

                        Choose Logo :
                        <input type="file" accept='image/*' name= "logo" className = 'field' placeholder='Team Logo' onChange={(e)=>{handleLogoInput(e)}} />

                 </label><br/><br/>


               </div>
                
                 <div className='border border-light w-25' style={{height : '150px'}}>
                       <img src={teamLogo} width ='320px' height='150px'/>
                 </div>

               

                <div className='w-25' >
                    <h5>customize your logo</h5>
                      <div className='border border-light playersDisplay' style={{height : '200px', width:'345px'}}>
                        {
                        !isLoadingTeamLogos && teamLogosData.map((el)=>{
                            return <img src={el} width='345px' height='200px' onClick = {()=>{handleTeamLogo(el)}}/>
                        })
                           
                        
                        }
                       </div>
               </div>

            </div>


             <div className='p-4'>
                 <h5>ALL PLAYERS  ( { !isLoadingPlayers && <span style={{color:'gold'}}>{playersData.length}</span> })</h5>
                 
                 <div className = 'border border-light rounded d-flex playersDisplay m-2' style={{height : '220px'}} >
                     {
                          !isLoadingPlayers && (
                            playersData.map((el,ind)=>{
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