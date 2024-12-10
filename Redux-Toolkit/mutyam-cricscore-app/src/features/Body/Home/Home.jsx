import React from 'react'
import CricketBall from './../../../assets/cricketball (2).png'
import Features from './Features'
import Cricketball from '../../../assets/bestCricBallAni.png'

function Home()
{
    return (
        <section className=' m-4'>

            <section className='p-5 box'>
                
                <div className='d-flex align-items-center'>
                    <img src = {CricketBall} width='500px' height='500px' className='cricBall'/>
                    <h5 className='headingText m-5 text-primary'>MUTYAM CRICSC<img src= {Cricketball} alt='Bowl' width='80px' className='cricBall fs-2'/>RE APP</h5>
                </div>
                   
            </section>

                  <Features/>

        </section>
    )
}

export default Home