import React from 'react'
import axios from 'axios'


function CreateMatch()
{

    const [teamData, setTeamData] = React.useState({})

    const [match, setMatch] = React.useState({
        teamAImage:'',
        teamBImage:'',
        teamAName :'',
        teamBName :'',
        matchFormat:'',
        matchDate : '',
        matchTime :'',
        overs : '',
        venue : '',
        wickets:''
    })
    
    React.useEffect(()=>{

            axios.get('http://localhost:5000/TeamsImages').then((res)=>{

                setTeamData({...teamData, ...res.data}) 
                console.log(res.data)

            })  
        
    },[])



    function handleSubmit()
    {
          console.log('match :: ', match)
    }


    return (
        <section className = 'NaaFlexBox createMatch' style={{boxSizing:'border-box'}}>
            <div style = {{padding:'10px', textAlign:'center'}}>

                <h1 style={{margin :'10px'}}>Create Match</h1>
               
            </div>
             

             <section style = {{borderLeft:'1px solid black', borderRight : '1px solid black', padding:'30px', width :'500px'}}>
                
                 <div className = 'NaaFlexBox'>
                     <div>
                       <img src = {match.teamAImage} width = '200px' height= '100px'/><br/>
                       <input type="text" placeholder='Team01 Name' size='25' className='AddPlayerFields' name='teamAName' onChange={(e)=>{setMatch({...match, teamAName:e.target.value})}}/>
                    </div>

                    <span> Vs </span>
                     
                     <div>
                        <img src = {match.teamBImage} width = '200px' height= '100px'/><br/>
                        <input type='text' placeholder='Team02 Name' size='25' className='AddPlayerFields'  name='teamBName' onChange = {(e)=>{setMatch({...match, teamBName : e.target.value})}}/>
                     </div> 
                 </div>


                 <div style={{margin:'20px', textAlign:'center'}}>
                    
                    <div className='matchFormat'>
                       <p>Match Format : </p> 

                       <button onClick = {(e)=>{ setMatch({...match , matchFormat: e.target.innerHTML})}} type='button'> T10 </button> 
                       <button onClick = {(e)=>{ setMatch({...match , matchFormat: e.target.innerHTML})}} type='button'> T20 </button> 
                       <button onClick = {(e)=>{ setMatch({...match , matchFormat: e.target.innerHTML})}} type='button'> Club </button> 
                       <button onClick = {(e)=>{ setMatch({...match , matchFormat: e.target.innerHTML})}} type='button'> One Day </button> 
                       <button onClick = {(e)=>{ setMatch({...match , matchFormat: e.target.innerHTML})}} type='button'> TestMatch </button> 

                    </div>
                       

                    <label>
                         Match Date : 
                         <input type='date' className='AddPlayerFields' name ='matchDate' onChange={(e)=>setMatch({...match, matchDate : e.target.value})}/>

                    </label><br/><br/>

                    <label>
                         Match Time : 
                         <input type='time' className='AddPlayerFields' name='matchTime' onChange = {(e)=>setMatch({...match, matchTime : e.target.value})} />
                    </label><br/><br/>

                    <label>
                        Set Overs :  
                        <input type='text' className='AddPlayerFields' name='overs' onChange = {(e)=>setMatch({...match, overs : e.target.value})}/>
                    </label><br/><br/>

                    <label>
                        Venue: <img src={match.venue.GroundImage} width='50px' height='40px'/>
                        <input type='text' className='AddPlayerFields' name='venue' value={match.venue.GroundName} onChange = {(e)=>setMatch({...match, venue : e.target.value})}/>

                    </label><br/><br/>

                    <label>
                        wickets: 
                        <input type='text' className='AddPlayerFields' name='wickets' onChange = {(e)=>setMatch({...match, wickets : e.target.value})}/>
                    </label><br/><br/>


                    
                 </div>

             </section>

             <section  style = {{ borderRight : '1px solid black', padding:'20px', width :'400px'}}>

                   <h1 style={{margin:'10px'}}>Customize your Team Logos</h1>

                   <div style={{display:'flex', gap:'20px'}}>
                        

                        <div>
                        <h1 style={{margin :'10px'}}>Team A : </h1>
                        <div className='createMatch TeamsCustom'>
                          {console.log(teamData)}
                            {
                                
                               teamData.teamAImages && teamData.teamAImages.map((el)=>{
                                
                                return <img src={el} width = '100%'  onClick={()=>{setMatch({...match,teamAImage:el})}}/>
                            })
                            } 

                        </div>
                        </div>

                       <div>
                        <h1 style={{margin :'10px'}}>Team B : </h1>

                        <div className='createMatch TeamsCustom'>
                            {
                               
                                teamData.teamBImages && teamData.teamBImages.map((el)=>{
                                    
                                    return <img src={el} width = '100%'  onClick={()=>{setMatch({...match, teamBImage:el})}}/>
                                })
                            } 

                           </div>
                        </div>
                   </div>

                   <h1 style={{margin : '10px'}}>Select Venue With Details</h1>

                   <div className='createMatch' style={{display:'flex', width:'300px', height:'170px', overflowX :'scroll'}}>
                           
                           {
                                teamData.venuesList && teamData.venuesList.map((el)=>{
                                    return <div onClick = {()=>{setMatch({...match, venue : el})}}>
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