import React from 'react'
import axios from 'axios'


function CreateMatch()
{
    
    const initialValue = {
        teamAImage:'',
        teamBImage:'',
        teamAName :'',
        teamBName :'',
        matchFormat: '',
        matchDate : null,
        matchTime :'',
        overs : '',
        venue : '',
        wickets:''
    }
    const [customData, setCustomData] = React.useState({})
    const [teamsData, setTeamsData] = React.useState([])

    const [addMatch, setAddMatch] = React.useState({...initialValue})
    
    React.useEffect(()=>{

            axios.get('http://localhost:5000/CustomTeams').then((res)=>{

                setCustomData({...customData, ...res.data}) 
                console.log(res.data)

            })
            
            axios.get('http://localhost:5000/Teams').then((res)=>{

                setTeamsData([...res.data])
            })
    },[])



    function handleSubmit()
    {
          console.log('match :: ', addMatch)

          axios.post('http://localhost:5000/CricketMatches', addMatch).then((res)=>{

               console.log(res.data)

          }).catch((err)=>{

            console.log(err)
            
          })
          
    }


    return (
        <section className = 'NaaFlexBox createMatch' style={{boxSizing:'border-box'}}>
            <div style = {{padding:'10px', textAlign:'center'}}>

                <h1 style={{margin :'10px'}}>Add Match</h1>
               
            </div>
             

             <section style = {{borderLeft:'1px solid black', borderRight : '1px solid black', padding:'50px', width :'500px'}}>
                
                 <div className = 'NaaFlexBox'>
                     <div>
                       <img src = {addMatch.teamAImage} width = '200px' height= '100px'/><br/>
                       <select name='teamAName' onChange={(e)=>{setAddMatch({...addMatch, teamAName:e.target.value})}} className = 'AddPlayerFields' >
                              <option value={null} disabled selected>Select Team A Name</option>
                            {      
                                   teamsData && teamsData.map((el)=>{
                                         return (
                                            <option value={el.id}  disabled = {addMatch.teamBName == el.id}>{el.teamName.toUpperCase()}</option>
                                         )
                                   })
                            }
                           
                       </select>
                    </div>

                    <span> Vs </span>
                     
                     <div>
                        <img src = {addMatch.teamBImage} width = '200px' height= '100px'/><br/>

                        <select name='teamBName' className = 'AddPlayerFields' onChange={(e)=>{setAddMatch({...addMatch, teamBName:e.target.value})}}>
                            <option value={null} disabled selected>Select Team B Name</option>
                            {
                                teamsData && teamsData.map((el)=>{
                                    return <option value={el.id}  disabled = {addMatch.teamAName == el.id} >{el.teamName.toUpperCase()}</option>
                                })
                            }
                        </select>
                     </div> 
                 </div>


                 <div style={{margin:'20px', textAlign:'center'}}>
                    
                   
                     <label> Match Format :   
                        
                        <select name="matchFormat" id="matchFormat" className='AddPlayerFields' onChange = {(e)=>{setAddMatch({...addMatch, matchFormat:e.target.value})}}>
                             <option value='select' selected disabled >-- select Match Format --</option>
                             <option value='T10'>T10</option>
                             <option value='T20'>T20</option>
                             <option value='Club'>Club</option>
                             <option value='One Day'>One Day</option>
                             <option value='Test Match'>Test Match</option>
                        </select>

                    </label> <br/><br/>
                       
                    
                       

                    <label>
                         Match Date : 
                         <input type='date' className='AddPlayerFields' name ='matchDate' onChange={(e)=>setAddMatch({...addMatch, matchDate : e.target.value})}/>

                    </label><br/><br/>

                    <label>
                         Match Time : 
                         <input type='time' className='AddPlayerFields' name='matchTime' onChange = {(e)=>setAddMatch({...addMatch, matchTime : e.target.value})} />
                    </label><br/><br/>

                    <label>
                        Set Overs :  
                        <input type='text' className='AddPlayerFields' name='overs' onChange = {(e)=>setAddMatch({...addMatch, overs : e.target.value})}/>
                    </label><br/><br/>

                    <label>
                        Venue: <img src={addMatch.venue.GroundImage} width='50px' height='40px'/>
                        <input type='text' className='AddPlayerFields' name='venue' value={addMatch.venue.GroundName} onChange = {(e)=>setAddMatch({...addMatch, venue : e.target.value})}/>

                    </label><br/><br/>

                    <label>
                        wickets: 
                        <input type='text' className='AddPlayerFields' name='wickets' onChange = {(e)=>setAddMatch({...addMatch, wickets : e.target.value})}/>
                    </label><br/><br/>


                    
                 </div>

             </section>

             <section  style = {{ borderRight : '1px solid black', padding:'20px', width :'400px'}}>

                   <h1 style={{margin:'10px'}}>Customize your Team Logos</h1>

                   <div style={{display:'flex', gap:'20px'}}>
                        

                        <div>
                        <h1 style={{margin :'10px'}}>Team A : </h1>
                        <div className='createMatch TeamsCustom'>
                          {console.log(customData)}
                            {
                                
                               customData.teamAImages && customData.teamAImages.map((el)=>{
                                
                                return <img src={el} width = '100%'  onClick={()=>{setAddMatch({...addMatch,teamAImage:el})}}/>
                            })
                            } 

                        </div>
                        </div>

                       <div>
                        <h1 style={{margin :'10px'}}>Team B : </h1>

                        <div className='createMatch TeamsCustom'>
                            {
                               
                                customData.teamBImages && customData.teamBImages.map((el)=>{
                                    
                                    return <img src={el} width = '100%'  onClick={()=>{setAddMatch({...addMatch, teamBImage:el})}}/>
                                })
                            } 

                           </div>
                        </div>
                   </div>

                   <h1 style={{margin : '10px'}}>Select Venue With Details</h1>

                   <div className='createMatch' style={{display:'flex', width:'300px', height:'170px', overflowX :'scroll'}}>
                           
                           {
                                customData.venuesList && customData.venuesList.map((el)=>{
                                    return <div onClick = {()=>{setAddMatch({...addMatch, venue : el})}}>
                                               <img src= {el.GroundImage} width = '300px' height = '125px'/>
                                               <p style={{fontSize: 'small', padding:'5px', textAlign:'center', margin:'0px'}}>{el.GroundName}</p>
                                          </div>
                                })
                           }
                         
                   </div>
             </section>

             <div style={{padding:'30px'}} >

                     <button onClick = {handleSubmit}>Submit</button>
             </div>
        </section>
    )
}


export default CreateMatch