import React from 'react'
import CricketBat from './../../../assets/cricket-bat.png'
import CricketBall from './../../.././assets/cricket.png'

function ScoreCardTeam({scoring}){
    return (
        <>
        <div className='border border-light p-4 w-50 text-center '>
                       <div className='border border-light w-50 m-auto rounded-3'>
                           <h1>{scoring.score}/{scoring.wickets}</h1>
                       </div>
                <div className='border border-2 rounded-3 p-2 m-2'>

                     <div>
                         <div className='d-flex justify-content-between bg-warning text-dark p-2'><span className='w-25'>Batsman &nbsp;<img src={CricketBat} width='25px'/></span><span>R</span> <span>B</span><span>4s</span><span>6s</span></div>
                         <div className='d-flex justify-content-between'>
                           <p className='d-flex gap-3 w-25'>
                            {
                                scoring?.Batsman?.striker?.playerName
                            }
                            <img src={CricketBat} width='20px'/>
                           </p>
      
     
                          {<span>{scoring?.Batsman?.striker?.batRuns}</span> }
                          {<span>{scoring?.Batsman?.striker?.ballsFaced}</span> }
                          {<span>{scoring?.Batsman?.striker?.fours}</span>}
                          {<span>{scoring?.Batsman?.striker?.sixes}</span>}
                    </div>

                    <div className='d-flex justify-content-between'>
                      <p className='d-flex gap-3 w-25'>
                       {
                           scoring?.Batsman?.nonStriker?.playerName
                       }
                      
                      </p>
     
                       <span>{scoring?.Batsman?.nonStriker?.batRuns}</span>
                       <span>{scoring?.Batsman?.nonStriker?.ballsFaced}</span>
                       <span>{scoring?.Batsman?.nonStriker?.fours}</span>
                       <span>{scoring?.Batsman?.nonStriker?.sixes}</span>
                    </div>
                     </div>

                    <div>
                       <div className='d-flex justify-content-between bg-warning text-dark p-2' ><span className='w-25'>Bowler</span> <span>Ov</span> <span>R</span><span>W</span></div>
                       <div className='d-flex justify-content-between'>
                       <p className='d-flex gap-3 w-25'>
                       {
                             scoring?.Bowler?.playerName
                       }
                       
                       <img src={CricketBall} width='20px'/>
                      </p>
     
                           <span>{scoring?.Bowler?.overs}</span>
                           <span>{scoring?.Bowler?.bowlRuns}</span>
                           <span>{scoring?.Bowler?.wickets}</span>
                      </div>
                    </div>


                  </div> 

            {/* ------------------------------------------------------------------------------------------------ */}


                  <div className='border border-2 rounded-3 p-2 m-2'>

                    <div>
                          <div className='d-flex justify-content-between bg-primary text-light p-2'><span className='w-25'>Batsman &nbsp;<img src={CricketBat} width='25px'/></span><span>R</span> <span>B</span><span>4s</span><span>6s</span></div>
                          <div className='d-flex justify-content-between flex-column'>

                            {
                                scoring?.playersOut.map((el)=>{
                                    return <div className='d-flex justify-content-between'>
                                                <p className='d-flex gap-3 w-25'>
                                                  {
                                                     el.playerName
                                                  }
                                                </p>
                                                
                                                <span>{el.batRuns}</span> 
                                                <span>{el.ballsFaced}</span> 
                                                <span>{el.fours}</span>
                                                <span>{el.sixes}</span>
                                                 
                                           </div>
                                })
                            }
                        


                        
                    </div>
                  </div>

                  <div>
                     <div className='d-flex justify-content-between bg-primary text-light p-2' ><span className='w-25'>Bowler &nbsp;<img src={CricketBall} width='20px'/></span> <span>Ov</span> <span>R</span><span>W</span></div>
                     <div className='d-flex justify-content-between flex-column'>

                     {
                                scoring?.bowlersList.slice().reverse().filter((item, index, self) =>
                                    index === self.findIndex((obj) => obj.id === item.id)
                                ).reverse().map((el)=>{
                                    return <div className='d-flex justify-content-between'>
                                                <p className='d-flex gap-3 w-25'>
                                                  {
                                                     el.playerName
                                                  }
                                                </p>
                                                
                                                <span>{el.overs}</span> 
                                                <span>{el.bowlRuns}</span> 
                                                <span>{el.wickets}</span>
                                                 
                                           </div>
                                })
                            }
                    
                 </div>
                 </div>

                  </div> 

                  </div>
    
                
        </>

    )
}

export default ScoreCardTeam