import React from 'react'


function SquadDashboard({teamXIPlayers,type, handleRemove})
{
    
    return (
        <>
        <div className='text-start w-100'>
        {type=='teamA' &&   <h5 className='d-flex justify-content-between' style={{width:'800px'}}> <span><i class="bi bi-people-fill">&nbsp;&nbsp;<b>{teamXIPlayers.length}</b></i></span>Select playing XI Squad - TEAM A </h5>}
        {type=='teamB' &&   <h5 className='d-flex justify-content-between' style={{width:'800px'}}> <span><i class="bi bi-people-fill">&nbsp;&nbsp;<b>{teamXIPlayers.length}</b></i></span>Select playing XI Squad - TEAM B </h5>}
        </div>
        <section className='teamBg d-flex flex-column ' style={{width:'100%', height:'700px'}}>

                <div className='m-5 p-2 d-flex align-items-center justify-content-evenly '>
                    
                        {
                            teamXIPlayers && teamXIPlayers.map((el, ind)=>{
                                if( ind <= 3)
                                {
                                    return  <div className='playerBox rounded-3 overflow-hidden' onClick={()=>{handleRemove(el.id)}}>{<img src={el.photo} width='100%' height='100%'/>}</div> 
                                }
                                
                            })
                        }
                   
                </div>

                <div className='m-5 p-2 d-flex align-items-center justify-content-evenly'>
                       {
                         teamXIPlayers && teamXIPlayers.map((el, ind)=>{
                            if(ind > 3 && ind <= 6)
                            {
                                return  <div className='playerBox rounded-3 overflow-hidden' onClick={()=>{handleRemove(el.id)}}>{<img src={el.photo} width='100%' height='100%'/>}</div> 
                            }
                            
                        })
                       }   
                </div>


                <div className='m-5 p-4 d-flex align-items-center justify-content-evenly'>
                    {
                         teamXIPlayers && teamXIPlayers.map((el, ind)=>{
                            if(ind > 6  && ind <= 10)
                            {
                                return  <div className='playerBox rounded-3 overflow-hidden' onClick={()=>{handleRemove(el.id)}}>{<img src={el.photo} width='100%' height='100%'/>}</div> 
                            }
                            
                        })
                    } 
                </div>
                    
               </section>
               </>

    )
}

export default SquadDashboard