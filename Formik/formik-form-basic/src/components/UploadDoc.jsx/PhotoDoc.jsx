import React from 'react'
import { photographInstructions } from '../../data'

function PhotoDoc(props)
{
   
   
    function handlePhoto(e)
    {
        const imageUrl =  window.URL.createObjectURL(e.currentTarget.files[0]);
        props.Uf.setFieldValue('UploadFileDetails.photo',imageUrl)

    }

    

    return (
        <section className='UploadProfile'>
              <div>
                 <p><strong>Applicant's Colour Passport Photograph</strong></p>

                   <div className='PhotoDiv'>
                     { props.Uf.values.UploadFileDetails.photo ? <img  src = {props.Uf.values.UploadFileDetails.photo} width = '320' height = '240'/>  : 
                     <img src = 'https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png' width='310' height = '230'/>}
                   </div>   

                    <div className='fileInput'>
                        <input type="file" accept = "image/*"  name="UploadFileDetails.photo" onChange={handlePhoto} required/>
                    </div>

                

              </div>

              <div className='specificIns'>
                  <h5 style={{backgroundColor:'rgb(27,56,125)', color:'whitesmoke'}}>Specifications for Photograph</h5>
                   <ul>
                      {
                        photographInstructions.map((el)=>{
                            return(
                                <li>{el}</li>
                            )
                        })
                      }
                   </ul>

              </div>

        </section>
    )
}

export default PhotoDoc