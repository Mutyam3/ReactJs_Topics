import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'



function MatchCenter()
{

    const {id}=  useParams()


    return(
        <section>
                 
                <ul className='d-flex justify-content-evenly' type='none'>
                    <Link to={`/matches/${id}/selectSquad`} className='navbartext'><li>Select Squad</li></Link>
                    <Link to={`/matches/${id}/scoring`} className='navbartext' ><li>Scoring</li></Link>
                    <Link to={`/matches/${id}/scoreCard`} className='navbartext'><li>Score Card</li></Link>
                </ul>
                

                <Outlet/>



            

             
        </section>
    )
}

export default MatchCenter