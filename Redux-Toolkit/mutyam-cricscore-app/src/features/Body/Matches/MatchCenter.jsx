import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMatchByIdQuery } from '../../../services/cricketApi'

function MatchCenter()
{

    const {id}=  useParams()
    const  {isLoading: matchLoading, data : matchData } = useGetMatchByIdQuery(id)

    console.log('ScoreCard :: ',matchData)
    return(
        <section>
                  
                <ul className='d-flex justify-content-evenly' type='none'>
                    <Link><li>Select Squad</li></Link>
                    <Link><li>Scoring</li></Link>
                    <Link><li>Score Card</li></Link>
                </ul>
                

                {
                    JSON.stringify(matchData)
                }

             
        </section>
    )
}

export default MatchCenter