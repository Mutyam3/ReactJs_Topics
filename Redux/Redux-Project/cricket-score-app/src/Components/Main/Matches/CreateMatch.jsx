import React from 'react'
import axios from 'axios'


function CreateMatch()
{

    const [teamOneData, setTeamOneData] = React.useState([])
    const [teamTwoData, setTeamTwoData] = React.useState([])
    const [teamOneImage, setTeamOneImage] = React.useState('')
    const [teamTwoImage, setTeamTwoImage] = React.useState('')
    
    React.useEffect(()=>{

        

            axios.get('http://localhost:5000/TeamImagesOne').then((res)=>{

                setTeamOneData(res.data) 

            })

            axios.get('http://localhost:5000/TeamImagesTwo').then((res)=>{

                setTeamTwoData(res.data)

            })
    
        
        
    },[])

    function handleImageOne(im)
    {
         setTeamOneImage(im)  
    }

    function handleImageTwo(im)
    {
        setTeamTwoImage(im)
    }



    return (
        <section className = 'NaaFlexBox createMatch'>
            <div style = {{display: 'flex', flexDirection:'column', justifyContent:"space-between"}}>
                <h1>Create Match</h1>
                <button>Submit</button>
            </div>
             

             <section style = {{borderLeft:'1px solid black', borderRight : '1px solid black', padding:'30px', width :'500px'}}>
                
                 <div className = 'NaaFlexBox'>
                     <div>
                       <img src = {teamOneImage} width = '200px' height= '100px'/><br/>
                       <input type="text" placeholder='Team01 Name' size='25' className='AddPlayerFields'/>
                    </div>

                    <span> Vs </span>
                     
                     <div>
                        <img src = {teamTwoImage} width = '200px' height= '100px'/><br/>
                        <input type='text' placeholder='Team02 Name' size='25' className='AddPlayerFields'/>
                     </div> 
                 </div>


                 <div style={{margin:'40px', textAlign:'center'}}>
                    <label for='series'> 
                        Series : 
                        <select id='series' className='AddPlayerFields'>
                            <option value='select' selected disabled>--Select Series--</option>
                            <option value='Test Series'>Test Series</option>
                            <option value='T20'>T20</option>
                            <option value='One-day Internationals'>One-Day Internationals</option>
                            <option value='IPL'>IPL</option>
                        </select> 
                    </label> <br/><br/>

                    <label>
                         Match Date : 
                         <input type='date' className='AddPlayerFields'/>

                    </label><br/><br/>

                    <label>
                         Match Time : 
                         <input type='time' className='AddPlayerFields'/>
                    </label><br/><br/>

                    <label>
                        Set Overs : 
                        <input type='text' className='AddPlayerFields'/>
                    </label><br/><br/>

                    <label>
                        Match ID : 
                        <input type='text' className='AddPlayerFields'/>
                    </label><br/><br/>

                    
                 </div>

             </section>

             <section>

                   <h1>Customize your Team Logos</h1>

                   <div style={{display:'flex', gap:'20px'}}>
                        

                        <div>
                        <h1>Team One : </h1>
                        <div className='createMatch TeamsCustom'>
                        
                            {
                                teamOneData && teamOneData.map((el)=>{
                                    return <img src={el} width='100%' onClick = {()=>{handleImageOne(el)}}/>
                                })
                            } 

                        </div>
                        </div>

                       <div>
                        <h1>Team Two : </h1>

                        <div className='createMatch TeamsCustom'>
                            {
                                teamTwoData && teamTwoData.map((el)=>{
                                    return <img src={el} width = '100%'  onClick={()=>{handleImageTwo(el)}}/>
                                })
                            } 

                        </div>
                        </div>
                   </div>
             </section>
        </section>
    )
}


export default CreateMatch