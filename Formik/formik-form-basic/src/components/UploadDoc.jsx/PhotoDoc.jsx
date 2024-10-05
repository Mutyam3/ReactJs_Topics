import React from 'react'
import { photographInstructions } from '../../data'

function PhotoDoc()
{

    return (
        <section className='UploadProfile'>
              <div>
                 <p>Applicant's Colour Passport Photograph</p>

                   <div className='PhotoDiv'>
                      
                   </div>   

                    <div className='fileInput'>
                        <input type="file"/>
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