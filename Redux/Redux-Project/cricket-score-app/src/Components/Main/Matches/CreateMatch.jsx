import React from 'react'
import axios from 'axios'


function CreateMatch()
{

    const [teamData, setTeamData] = React.useState({})
    

    const [match, setMatch] = React.useState({
        teamOneImage:'',
        teamTwoImage:'',
        teamOneName :'',
        teamTwoName :'',
        series:'',
        matchDate : '',
        matchTime :'',
        overs : '',
        venue : ''
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

                <h1>Create Match</h1>
               
            </div>
             

             <section style = {{borderLeft:'1px solid black', borderRight : '1px solid black', padding:'30px', width :'500px'}}>
                
                 <div className = 'NaaFlexBox'>
                     <div>
                       <img src = {match.teamOneImage} width = '200px' height= '100px'/><br/>
                       <input type="text" placeholder='Team01 Name' size='25' className='AddPlayerFields' name='teamOneName' onChange={(e)=>{setMatch({...match, teamOneName:e.target.value})}}/>
                    </div>

                    <span> Vs </span>
                     
                     <div>
                        <img src = {match.teamTwoImage} width = '200px' height= '100px'/><br/>
                        <input type='text' placeholder='Team02 Name' size='25' className='AddPlayerFields'  name='teamTwoName' onChange = {(e)=>{setMatch({...match, teamTwoName : e.target.value})}}/>
                     </div> 
                 </div>


                 <div style={{margin:'40px', textAlign:'center'}}>
                    <label for='series'> 
                        Series : 
                        <select id='series' className='AddPlayerFields' name='series' onChange={(e)=>{setMatch({...match, series: e.target.value})}}>
                            <option value='select' selected disabled>--Select Series--</option>
                            <option value='Test Series'>Test Series</option>
                            <option value='T20'>T20</option>
                            <option value='One-day Internationals'>One-Day Internationals</option>
                            <option value='IPL'>IPL</option>
                        </select> 
                    </label> <br/><br/>

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
                        Venue: 
                        <input type='text' className='AddPlayerFields' name='venue' onChange = {(e)=>setMatch({...match, venue : e.target.value})}/>
                    </label><br/><br/>

                    
                 </div>

             </section>

             <section  style = {{ borderRight : '1px solid black', padding:'30px', width :'400px'}}>

                   <h1>Customize your Team Logos</h1>

                   <div style={{display:'flex', gap:'20px'}}>
                        

                        <div>
                        <h1>Team One : </h1>
                        <div className='createMatch TeamsCustom'>
                          {console.log(teamData)}
                            {
                                
                               teamData.teamOneImages && teamData.teamOneImages.map((el)=>{
                                
                                return <img src={el} width = '100%'  onClick={()=>{setMatch({...match,teamOneImage:el})}}/>
                            })
                            } 

                        </div>
                        </div>

                       <div>
                        <h1>Team Two : </h1>

                        <div className='createMatch TeamsCustom'>
                            {
                               
                                teamData.teamTwoImages && teamData.teamTwoImages.map((el)=>{
                                    
                                    return <img src={el} width = '100%'  onClick={()=>{setMatch({...match, teamTwoImage:el})}}/>
                                })
                            } 

                           </div>
                        </div>
                   </div>
             </section>

             <div style={{padding:'25px'}}>

                     <button onClick = {handleSubmit}>Submit</button>
             </div>
        </section>
    )
}


export default CreateMatch