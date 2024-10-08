import React from 'react'
import { photographInstructions } from '../../data'

function PhotoDoc(props)
{
    const [url, setUrl] = React.useState('')
    function handlePhoto(e)
    {
       const imageUrl =  window.URL.createObjectURL(e.target.files[0]);
        props.Uf.setFieldValue('photo',imageUrl)
        setUrl(imageUrl)
    }

    return (
        <section className='UploadProfile'>
              <div>
                 <p>Applicant's Colour Passport Photograph</p>

                   <div className='PhotoDiv'>
                     { url && <img  src = {url} width = '320' height = '240'/> }
                   </div>   

                    <div className='fileInput'>
                        <input type="file" accept = "image/*" name="photo" onChange={handlePhoto}/>
                    </div>

              </div>

              <div className='specificIns'>
                  <h5>Specifications for Photograph</h5>
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