import axios from 'axios'
import React from 'react'
import { Link, useLocation, useParams , Outlet} from 'react-router-dom'

function MatchScoring()
{

    var x = useLocation()

    console.log('state :: ', x)



    return(
        <section >

         <div className='MatchesDiv'>

             <Link to = '/matches/:cname/matchOverview'><button>Match Overview</button></Link>
             <Link to = '/matches/:cname/matchSelectSquad'><button>Select Squad</button></Link>
             <Link to = '/matches/:cname/matchGiveScore'><button>Give Score</button></Link>
             <Link to = '/matches/:cname/matchScoreCard'><button>Score Card</button></Link>

          </div>


          <div className='MatchesOut'>

                  <Outlet/>

           </div>

        </section>
    )
}

export default MatchScoring