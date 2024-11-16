import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'
import { useDispatch } from 'react-redux'
import { setTeams } from './TeamSlice'

function MatchCenter()
{

    const {id}=  useParams()


    return(
        <section>

                {matchLoading && <b>Loading....</b>}

                { !matchLoading &&
                <>
                 
                <ul className='d-flex justify-content-evenly' type='none'>
                    <Link to={`/matches/${id}/selectSquad`} className='navbartext'><li>Select Squad</li></Link>
                    <Link to={`/matches/${id}/scoring`} className='navbartext' ><li>Scoring</li></Link>
                    <Link to={`/matches/${id}/scoreCard`} className='navbartext'><li>Score Card</li></Link>
                </ul>
                

                <Outlet/>

                </>

                } 

             
        </section>
    )
}

export default MatchCenter