import React from 'react'


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
    }



    return (
        <section className = 'AddPlayerDiv'>
             
             <div>
                <h1>Add Player</h1>
                <button onClick = {addPlayerFn()}>Add Player</button>
             </div>
            

            <div>

            <label>

                Full Name : 
                 <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,fullName:e.target.value})}}/><br/>

            </label>

            <label>

                 Date of Birth : 
                 <input type='date' onChange={(e)=>{setAddPlayer({...addpalyer,dateOfBirth:e.target.value})}}/><br/>

            </label>
            
            <label>

                 Batting Style : 
                 <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,battingStyle:e.target.value})}}/><br/>

            </label>
            
            <label>

                Bowling Style : 
                <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,bowlingStyle:e.target.value})}}/><br/>

            </label>
            

            <label>

                Phone Number : 
                <input type='text' onChange={(e)=>{setAddPlayer({...addpalyer,phoneNumber:e.target.value})}}/><br/>

            </label>
            
            <label>
                   Email : 
                  <input type='email' onChange={(e)=>{setAddPlayer({...addpalyer,emailId:e.target.value})}}/><br/>

            </label>

            </div>
            

            <div>

                 <div style={{width : '250px', height : '250px', border: '2px solid black'}}>
                     {
                        addpalyer.photo && <img src={addpalyer.photo} width='250px' height = '250px'/>
                     }
                 </div>
                 <label>
                    Photo : 
                  <input type='file' onChange = {handlePhoto}/> 
                  </label>
            </div>

            
             
        </section>
    )
}

export default AddPlayer