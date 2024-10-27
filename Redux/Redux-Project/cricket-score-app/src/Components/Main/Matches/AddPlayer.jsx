import React from 'react'
import axios from 'axios'

function AddPlayer()
{

    const [addpalyer, setAddPlayer] = React.useState({

        fullName : '',
        dateOfBirth : '',
        battingStyle : '',
        bowlingStyle : '',
        phoneNumber : '',
        emailId : '',
        photo:''

    })

    function handlePhoto(e)
    {
        var imageUrl = window.URL.createObjectURL(e.currentTarget.files[0])
        setAddPlayer({...addpalyer, photo : imageUrl })
    }

    function addPlayerFn()
    {
        console.log(addpalyer)
        // axios.post('http://localhost:5000/Players', addpalyer).then((res)=>{
        //     console.log(res.data)
        // })
    }




    return (
        <section className = 'AddPlayerDiv'>
             
             <div style={{display:'flex', alignItems:'center'}}>
                <h1>Add Player</h1>
                
             </div>
            
           
            <div style={{borderRight:'1px solid black', borderLeft:'1px solid black', padding:'10px', display:'flex', justifyContent:'space-around', width :'900px', alignItems:'center'}}>
                <div>
            <label>

                Full Name :  &nbsp;&nbsp;&nbsp;
                 <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,fullName:e.target.value})}} className='AddPlayerFields'/>

            </label> <br/><br/>

            <label>

                 Date of Birth :  &nbsp;&nbsp;&nbsp;
                 <input type='date' onChange={(e)=>{setAddPlayer({...addpalyer,dateOfBirth:e.target.value})}} className='AddPlayerFields'/>

            </label><br/><br/>
            
            <label>

                 Batting Style :  &nbsp;&nbsp;&nbsp;
                 <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,battingStyle:e.target.value})}} className='AddPlayerFields'/>

            </label><br/><br/>
            
            <label>

                Bowling Style :  &nbsp;&nbsp;&nbsp;
                <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,bowlingStyle:e.target.value})}} className='AddPlayerFields'/>

            </label><br/><br/>
            

            <label>

                Phone Number :  &nbsp;&nbsp;&nbsp;
                <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,phoneNumber:e.target.value})}} className='AddPlayerFields'/>

            </label><br/><br/>
            
            <label>
                   Email :  &nbsp;&nbsp;&nbsp;
                  <input type='email' onChange={(e)=>{setAddPlayer({...addpalyer,emailId:e.target.value})}} className='AddPlayerFields'/>

            </label>
            <br/><br/>
            </div>
            

            <div>

                 <div style={{width : '250px', height : '250px', border: '2px solid black'}}>
                     {
                        addpalyer.photo && <img src={addpalyer.photo} width='250px' height = '250px'/>
                     }
                     
                 </div>
                 <div style={{border: '2px solid black', borderTop : '0px', padding:'10px', boxSizing:'border-box', width : '254.2px', textAlign:'center'}}>
                    <label>
                          
                         <input type='file' onChange = {handlePhoto}/> 
                    </label>
                  </div>
                 
            </div>

            </div>

            <div style={{display:'flex', alignItems:'center'}}>
                  <button onClick = {addPlayerFn}>Add Player</button>
            </div>

                
            
             
        </section>
    )
}

export default AddPlayer