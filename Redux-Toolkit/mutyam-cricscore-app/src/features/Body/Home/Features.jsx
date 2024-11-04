import React from 'react'
import scoreBoard from './../../../assets/cricketScoreBoard.avif'
import liveScore from'./../../../assets/liveScore.avif'
import CricketManage from './../../../assets/ManagementCricket.avif'

function Features()
{
    return (
        <section className='text-light d-flex flex-column align-items-center justify-content-space-between text-center'>

           <section className='w-100 border border-dark m-5 p-5 rounded'>
            <h4 className='w-25'>Features</h4>

            
            <ul className='d-flex justify-content-evenly w-100 ' type='none'>
               <a href='#d1' style={{textDecoration:'none', color:'rgb(235, 235, 235)'}}><li  className='border border-2 p-3 m-2 rounded'>Digital Scoring</li></a>
               <a href='#d2' style={{textDecoration:'none', color:'rgb(235, 235, 235)'}}><li  className='border border-2 p-3 m-2 rounded'>Live Score</li></a>
               <a href='#d3' style={{textDecoration:'none', color:'rgb(235, 235, 235)'}}><li  className='border border-2 p-3 m-2 rounded'>Management</li></a>
            </ul>

            </section>


        <section className='w-100 border border-dark m-5 p-5 rounded' id='d1'>

            <h5 className='border border-2 p-1 m-2 rounded w-25'>
               Digital Scoring
            </h5>

         
             <div className='d-flex justify-content-evenly align-items-center'>
                <div className='w-25 d-flex flex-column gap-5'>
                      <h2 className='fs-1'>The ultimate online cricket scoring platform! </h2>
                      <p className='fs-6'>
                            Enjoy effortless scoring with our user-friendly interface, delivering real-time updates and in-depth statistics for an immersive cricket experience.
                      </p> 
                </div>

                <img src = {scoreBoard} className='rounded'/>
             </div>

        </section> 


        <section className='w-100 border border-dark m-5 p-5 d-flex justify-content-evenly rounded' id='d2'>

            <img src = {liveScore} className='rounded' width='400px' height='400px'/>

           <div className='d-flex flex-column  gap-5 m-2 p-2'>
            <h5 className='border border-2 p-1 m-2 rounded w-25'>
                Live Score
            </h5>

            <div style={{width:'500px'}} className='d-flex flex-column gap-5'>
                      <h2 className='fs-1'>"Real-Time Cricket, Right at Your Fingertips – Experience Every Ball Live!" </h2>
                      <p className='fs-6'>
                      Catch every moment with real-time live scores, delivering instant updates on every run, wicket, and boundary. Track match progress and player stats effortlessly, keeping you fully immersed in the game.
                      </p> 
            </div>

            </div>


        </section>

        <section className='w-100 border border-dark m-5 p-5 rounded'  id='d3'>

                   <h5 className='border border-2 p-1 m-2 rounded w-25'>
                            Management
                   </h5>


                 <div className='d-flex justify-content-evenly align-items-center'>
                         <div className='w-25 d-flex flex-column gap-5'>
                                <h2 className='fs-1'>Master the Game, Manage with Ease</h2>
                                <p className='fs-6'>
                                Effortlessly manage cricket scoring with our powerful tools, offering control over match scheduling, player rosters, and live updates. Streamline operations with ease, ensuring real-time accuracy and a seamless fan experience.
                          </p> 
                  </div>

                     <img src = {CricketManage} className='rounded'/>
                   </div>

         </section> 

        </section>
    )
}

export default Features