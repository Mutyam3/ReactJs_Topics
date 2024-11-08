import React from 'react'
import {useFormik} from 'formik'

function AddPlayer()
{

           
            const playerDetails   =  useFormik({

                initialValues : {
                    fullName  : '',
                    dateOfBirth : '',
                    battingStyle : '',
                    bowlingStyle : '',
                    phoneNumber : '',
                    email : '',
                    photo : ''
                   },

                onSubmit : (values)=>{
                    console.log(values)

                    

                    playerDetails.resetForm()

                }
            })

            const [preview, setPreview] = React.useState('')

    
    function handlePhoto(e)
    {
        var imageUrl = window.URL.createObjectURL(e.currentTarget.files[0])
        playerDetails.setFieldValue('photo', imageUrl)
        setPreview(imageUrl)
    }
    

    return (
        <form onSubmit={playerDetails.handleSubmit} reset>
        <section className = 'd-flex justify-content-evenly align-items-center border border-light rounded-4 text-center'>
             
            
                <h4 className='text-center'>Add Player</h4>
             
      
        <div className='border border-top-0 border-bottom-0 d-flex p-5 w-75 justify-content-evenly'>
         <div>
            <label>

                Full Name :  &nbsp;&nbsp;&nbsp;
                 <input type='text' value={playerDetails.fullName} className='field' {...playerDetails.getFieldProps('fullName')}/>

            </label><br/><br/>

            <label>

                 Date of Birth :  &nbsp;&nbsp;&nbsp;
                 <input type='date' value={playerDetails.dateOfBirth} className='field' {...playerDetails.getFieldProps('dateOfBirth')}/>

            </label><br/><br/>
            
            <label>

                 Batting Style :  &nbsp;&nbsp;&nbsp;
                 <input type='text' value={playerDetails.battingStyle} className='field' {...playerDetails.getFieldProps('battingStyle')}/>

            </label><br/><br/>
            
            <label>

                Bowling Style :  &nbsp;&nbsp;&nbsp;
                <input type='text' value={playerDetails.bowlingStyle} className='field' {...playerDetails.getFieldProps('bowlingStyle')}/>

            </label><br/><br/>
            

            <label>

                Phone Number :  &nbsp;&nbsp;&nbsp;
                <input type='text' value={playerDetails.phoneNumber} className='field' {...playerDetails.getFieldProps('phoneNumber')}/>

            </label><br/><br/>
            
            <label>
                   Email :  &nbsp;&nbsp;&nbsp;
                  <input type='email' value={playerDetails.email} className='field' {...playerDetails.getFieldProps('email')}/>

            </label>
            <br/><br/>
            </div>
            

            <div>

                 <div style={{width : '250px', height : '250px', border: '2px solid white'}}>
                     {
                        preview &&  <img src={preview} width='250px' height = '250px'/>
                     }
                     
                 </div>

                 <div style={{border: '2px solid black', borderTop : '0px', padding:'10px', boxSizing:'border-box', width : '254.2px', textAlign:'center'}}>
                    <label>
                          
                         <input type='file' value={playerDetails.photo} onChange = {handlePhoto} name='photo'/>

                    </label>
                  </div>
                 
            </div>
            </div>

            

            <div style={{display:'flex', alignItems:'center'}}>

                  <button type='submit'>Submit</button>   

            </div>

                 
        
             
        </section>
        </form>
    )
}

export default AddPlayer