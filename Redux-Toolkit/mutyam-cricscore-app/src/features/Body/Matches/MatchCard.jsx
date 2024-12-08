import React from 'react'
import {Link} from 'react-router-dom'


function MatchCard({matchCompo, teamsNameById})
{
    console.log(matchCompo)
    return (
        <section className='m-3  p-4 rounded d-flex flex-wrap gap-5 align-items-center justify-content-center'>

              {
                   matchCompo.map((el)=>{
                        return <Link to={`/matches/${el.id}`} style={{textDecoration:'none', color:'whitesmoke'}}><section className='border border-ligh rounded-3' style={{width:'600px'}}>
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
                               </section></Link>
                   })
              }

        </section>
    )
}

export default MatchCard