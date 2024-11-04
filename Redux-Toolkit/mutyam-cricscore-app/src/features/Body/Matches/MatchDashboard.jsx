import React from 'react'

function MatchDashboard()
{

    return (
        <>
               <h4>Match Dashboard</h4>

               <section className='d-flex justify-content-evenly'>
                     <h5>Sort by </h5>
                    

                        <input type='date' className='field text-light' />
                         
                        <select className='field'>
                            <option value={null} disabled selected>Teams</option>
                            <option>CSK</option>
                            <option>SRH</option>
                            <option>MUMBAI INDIANS</option>
                        </select>


                        <select className='field'>
                            <option value={null} disabled selected>Venues</option>
                             
                        </select>
                    
                  
               </section>

               {/* ------------------------------------------------- */}

               <section>

                      <h5>Today Matches  </h5>

                      <section className='border border-dark m-4 p-5'>

                      </section>


               </section>


               <section>

                    <h5>UpComming Matches  </h5>

                    <section className='border border-dark m-4 p-5'>

                    </section>


               </section>
                  

             
        </>
    )
}

export default MatchDashboard