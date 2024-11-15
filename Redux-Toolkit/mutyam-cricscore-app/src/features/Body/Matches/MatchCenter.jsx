import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'

function MatchCenter()
{

    const {id}=  useParams()
    const {isLoading:matchLoading, data : matchData} = useGetMatchByIdQuery(id)

    return(
        <section>

                  
                <ul className='d-flex justify-content-evenly ' type='none'>
                    <Link to={`/matches/${id}/selectSquad`} className='navbartext' state={matchData && {teamAId : matchData.teamAName, teamBId : matchData.teamBName}}><li>Select Squad</li></Link>
                    <Link to={`/matches/${id}/scoring`} className='navbartext' state={id}><li>Scoring</li></Link>
                    <Link to={`/matches/${id}/scoreCard`} className='navbartext' state={id}><li>Score Card</li></Link>
                </ul>
                

                <Outlet/>

             
        </section>
    )
}

export default MatchCenter