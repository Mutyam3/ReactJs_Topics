import React from 'react'
import ScoringButtons from './ScoringButtons'

function TeamScore({type,matchData, scoring, teamsNameById})
{
  console.log('scoring ::', scoring)
    return (
        <section className='d-flex flex-column justify-content-between'>
               
               <div>
                 <div className='d-flex p-5 justify-content-between w-50 m-auto border border-light rounded-3'>
                    <div className = 'p-2 '>
                      {    type=='TeamA' && <>
                          <img src={matchData.teamALogo} width='120px' height='80px'/> 
                          <h5>{teamsNameById(matchData.teamAName)}</h5>
                          </>
                      }
                       
                       {    type=='TeamB' && <>
                          <img src={matchData.teamBLogo} width='120px' height='80px'/> 
                          <h5>{teamsNameById(matchData.teamBName)}</h5>
                          </>
                      }
                    </div>

                    <div className = 'm-2 '>
                        <h5>Score </h5>
                     
                        <h1>{scoring.score}/{scoring.wickets}</h1>
  
                    </div>

                 </div>
                 <p>Ov- <span>{scoring.oversInDecimals}/20</span></p>
                 </div>


                    <div className='d-flex jus'>

                         <div className='border border-light p-4 m-2 w-50'>

                         </div>

                         <ScoringButtons type={type}/>

                    </div>
                    
        </section>
    )
}

export default TeamScore