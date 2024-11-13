import React from 'react'


function MatchCard({matchCompo, teamsNameById})
{
    console.log(matchCompo)
    return (
        <section className='m-3 border border-light p-4 rounded'>

              {
                   matchCompo.map((el)=>{
                        return <section className='border border-light w-50 rounded-3'>
                                    <div className='p-2 d-flex justify-content-around '>
                                        <p>Match Date - {el.date}</p>
                                        <p>Match Time - {el.time}</p>

                                    </div>

                                    <div className='d-flex justify-content-evenly align-items-center border border-light p-3'>
                                        <div className='d-flex flex-column gap-2 align-items-center'>
                                            <img src= {el.teamALogo} width = '150px' height = '70px'/>
                                            <input type='text'  disabled  className='field text-center' value = {teamsNameById(el.teamAName)} /> 
                                            <p>Match Format - {el.matchFormat}</p>
                                            
                                        </div>

                                         <span>Vs</span>

                                        <div className='d-flex flex-column gap-2 align-items-center '>
                                            <img src= {el.teamBLogo} width = '150px' height = '70px'/>
                                            <input type='text'  disabled  className='field text-center' value = {teamsNameById(el.teamBName)} /> 
                                            <p>Match Overs - {el.overs}</p>
                                        </div>

                                        
                                    </div>

                                    <div className='d-flex  align-items-center p-3 justify-content-evenly'>
                                        
                                            <img src = {el.venue.GroundImage} width='150px' height = '70px'/>
                                            <div className=''>
                                                <h6>{el.venue.GroundName}</h6>
                                               
                                                <p className='m-1'><i class="bi bi-geo-alt-fill"></i> &nbsp;&nbsp; {el.venue.Address}</p>
                                                <p className='m-1'><i class="bi bi-people-fill"></i> &nbsp;&nbsp; {el.venue.Capacity}</p>
                                                
                                            
                                            </div>

                                         
                                    </div>
                               </section>
                   })
              }

        </section>
    )
}

export default MatchCard