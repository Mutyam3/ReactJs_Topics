import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Matches()
{
    return (
        <section>
               <h1>Matches</h1>
               <Link to='/matches/myGames'><button>My Games</button></Link>
               <Link to='/matches/customMatch'><button>Custom Your Match</button></Link>
              

               
               <div className='MatchesOut'>
                   <Outlet/>
               </div>

        </section>
    )
}

export default Matches