import React from 'react'

function CreateMatch()
{

    const [TeamOneData, setTeamOneData] = React.useState([])
    const [TeamTwoData, setTeamTwoData] = React.useState([])

    React.useEffect(()=>{

          
        
    },[])


    return (
        <section className = 'NaaFlexBox createMatch'>
            <div style={{display: 'flex', flexDirection:'column', justifyContent:"space-between"}}>
                <h1>Create Match</h1>
                <button>Submit</button>
            </div>
             

             <section style={{borderLeft:'1px solid black', borderRight : '1px solid black', padding:'30px', width :'500px'}}>
                
                 <div className = 'NaaFlexBox'>
                     <div>
                       <img src='' width = '200px' height= '100px'/><br/>
                       <input type="text" placeholder='Team01 Name' />
                    </div>

                    <span> Vs </span>
                     
                     <div>
                        <img src='' width = '200px' height= '100px'/><br/>
                        <input type='text' placeholder='Team02 Name'/>
                     </div> 
                 </div>


                 <div style={{margin:'40px', textAlign:'center'}}>
                    <label for='series'> 
                        Series : 
                        <select id='series'>
                            <option value='select' selected disabled>--Select Series--</option>
                            <option value='Test Series'>Test Series</option>
                            <option value='T20'>T20</option>
                            <option value='One-day Internationals'>One-Day Internationals</option>
                            <option value='IPL'>IPL</option>
                        </select> 
                    </label> <br/><br/>

                    <label>
                         Match Date : 
                         <input type='date'/>

                    </label><br/><br/>

                    <label>
                         Match Time : 
                         <input type='time'/>
                    </label><br/><br/>

                    <label>
                        Set Overs : 
                        <input type='text'/>
                    </label><br/><br/>

                    <label>
                        Match ID : 
                        <input type='text'/>
                    </label><br/><br/>

                    
                 </div>

             </section>

             <section>

                   <div>
                        <h1>Customize your Teams</h1>

                         <h1>Team One : </h1>

                        <div className='createMatch'>
                            {
                                
                            } 

                        </div>

                        <h1>Team Two : </h1>

                        <div className='createMatch'>
                            {

                            } 

                        </div>
                   </div>
             </section>
        </section>
    )
}


export default CreateMatch