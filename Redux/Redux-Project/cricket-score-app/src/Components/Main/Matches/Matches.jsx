import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Matches()
{
    return (
        <section>
               <h1>Matches</h1>

               <div className='MatchesDiv'>
                 
                  <Link to='/matches/createMatch'><button>Create Match</button></Link>
                  <Link to='/matches/selectSquad'><button>Select Squad</button></Link>
                  <Link to='/matches/addPlayer'><button>Add Player</button></Link>
                  <Link to='/matches/myGames'><button>My Games</button></Link>
                
               </div>
               
               <div className='MatchesOut'>
                   <Outlet/>
               </div>


        </section>
    )
}

export default Matches