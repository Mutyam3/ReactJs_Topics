import React from 'react'

function VenueDetails({data, matchDetails})
{
    console.log('venue',data)
    return (
        <section>
                 <div className='border border-light playersDisplay rounded-3 m-2' style={{height:'370px',overflowY:'scroll'}}>
                 {
                     data.map((el)=>{
                        return (
                           <div className='d-flex  align-items-center gap-3 w-100 border ' onClick={()=>{matchDetails.setFieldValue('venue', el.GroundName)}}>
                                <img src={el.CityImage} width='100px' height='70px'/>
                                <div>

                                   <h6>{el.GroundName}</h6>
                                   <div className='d-flex gap-5'>
                                      <p className='paraSize'><i class="bi bi-geo-alt-fill"></i>{el.Address}</p>
                                      <p className='paraSize'>{el.Capacity}</p>
                                   </div>
                                </div>
                           </div>
                        )
                    })
                 }
                 </div>
        </section>
    )
}

export default VenueDetails