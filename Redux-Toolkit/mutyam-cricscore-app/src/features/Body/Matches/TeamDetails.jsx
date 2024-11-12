import React from 'react'
import { Link } from 'react-router-dom'

function TeamDetails({data, matchDetails, type})
{
        
         function handleTeamName(data)
         {
            if(type=='TEAMA')
            {

                console.log(data)
                matchDetails.setFieldValue('teamAName', data.id)
                matchDetails.setFieldValue('teamALogo', data.logo)
                
            }

            if(type=='TEAMB')
            {
                matchDetails.setFieldValue('teamBName', data.id)
                matchDetails.setFieldValue('teamBLogo', data.logo)
            }
            
         }
       
    return (
         <section className='d-flex  flex-column gap-5'>
                  <h6 className='text-center m-0'>{type}</h6>
                  <div className=' p-3 d-flex gap-5 '>
                     <h6>Option 1 </h6>

                     <Link to='/teams/create-teams'><button className='btn btn-info'>Create new team</button></Link>

                  </div>
                 

                 <div className=' p-3 d-flex justify-content-evenly' >
                    <div style={{fitContent:'center'}}>
                       <h6>Option 2  </h6>
                       <p className='w-25 m-0'>choose from existing team</p>
                    </div>
                
                 
                 <div className='border border-light p-2 playersDisplay' style={{height:'210px',overflowY:'scroll'}}>
                 {
                     data.map((el)=>{
                        return (
                           <div className='d-flex  align-items-center gap-3 w-25 ' onClick={()=>{handleTeamName(el)}}>
                                <img src={el.logo} width='100px' height='70px'/>
                                <h6>{el.teamName}</h6>
                           </div>
                        )
                    })
                 }
                 </div>

                
                </div>
           

         </section>
    )
}

export default TeamDetails