import React from 'react'
import axios from 'axios'


function AddTeam()
{

    const initialValues =  { 
    teamName : '',
    teamOwner : '',
    players : [

    ]}

    const [allPlayersData, setAllPlayersData] = React.useState([])
    const [newTeam, setNewTeam] = React.useState({...initialValues})
    

    
    React.useEffect(()=>{
        
        axios.get('http://localhost:5000/PlayersDetails').then((res)=>{

            // console.log(res.data)
            setAllPlayersData(res.data)

        }).catch((err)=>{

            // console.log(err)

        })

    }, [])


   



    function handlePlayersToTeam(obj, i)
    {

        var temp = [...allPlayersData]
            temp[i].status = true

        var newPlayers = [...newTeam.players]
            newPlayers.push({...obj})
        setNewTeam({...newTeam, players : [...newPlayers]})
        setAllPlayersData([...temp])
        
    }



    function handleTeamToPlayers(obj, i)
    {
        var temp = [...newTeam.players]
           var p = temp.splice(i,1)
        setNewTeam({...newTeam, players:[...temp]})
        
       console.log('p', p)

        var all = [...allPlayersData]
        all =  all.map((el)=>{
            if(el.fullName == p[0].fullName)
            {
                console.log(el)
                el.status = false
                return el
            }
            return el
        })

        setAllPlayersData([...all])

    }



    function handleSubmitSquad()
    {
         console.log('New Team  : ', newTeam )

         axios.post('http://localhost:5000/Teams', newTeam).then((res)=>{
            console.log(res.data)
         }).then((err)=>{
            console.log(err)
         })

         setNewTeam({...initialValues})
        
        updateMultiplePlayers([...allPlayersData])
           
    }



    const updateMultiplePlayers = async (players) => {
       
        players = players.filter((el) => el.status === true);
    
        console.log('Filtered Players :: ', players);
    
        
        const updatePromises = players.map((el) => {

            const url = "http://localhost:5000/PlayersDetails/" + el.id;

            return axios.put(url, { ...el, status: true }); 

        });
    
        const results = await Promise.all(updatePromises);
        console.log("Update results:", results);
    };
    
  

    return (
        <section>
            <div >
                 <h1> ADD TEAM </h1>

                 <div>

                 <label>
                        Team Name : 
                       <input type="text" name = "teamName" className = 'AddPlayerFields' placeholder='Team Name' onChange={(e)=>{setNewTeam({...newTeam, teamName : e.target.value})}}/>
                 </label><br/><br/>


                 <label>
                        Team Owner :
                       <input type="text" name= "teamOwner" className = 'AddPlayerFields' placeholder='Team Owner' onChange={(e)=>{setNewTeam({...newTeam, teamOwner :e.target.value})}}/>
                 </label> <br/><br/>


               </div>

            </div>


             <div>
                 <h1>ALL PLAYERS {allPlayersData.length}</h1>
                 
                 <div className = 'createMatch selectSquad' >
                     {
                          allPlayersData && allPlayersData.map((el, ind)=>{
                            return <div className='playersCard'  onClick = {()=>{handlePlayersToTeam(el, ind)}}
                              style={el.status ? {backgroundColor : 'red', pointerEvents:'none'} : {backgroundColor:'green'}} >

                                        <img src={el.photo} width = '100px' height = '100px' />
                                        <h4 style={{borderTop:'2px solid black'}}>{el.fullName}</h4>

                            </div>
                                   
                          })
                     }
                 </div>
                 

             </div>

             <div>
                 <h1>NEW TEAM  {newTeam.players.length}</h1>

                 <div className = 'createMatch selectSquad'>
                     {
                        newTeam.players && newTeam.players.map((el, ind)=>{
                            return <div className='playersCard' onClick = {()=>{handleTeamToPlayers(el, ind)}}>
                                      <img src={el.photo} width = '100px' height = '100px'/>
                                      <h4 style={{borderTop:'2px solid black'}}>{el.fullName}</h4>
                                  </div>
                        })
                     }
                 </div>


             </div>


             <div className='selectSquadBtns' style={{textAlign:'center', margin:'10px', padding:'10px'}}>
                   <button onClick = {handleSubmitSquad}>Submit</button>
             </div>
            


        </section>
)}

export default AddTeam