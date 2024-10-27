import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function CustomMatch()
{
    return (
        <section>
              
              <div className='MatchesDiv'>
                 
                 <Link to='/matches/customMatch/createMatch'><button>Create Match</button></Link>
                 <Link to='/matches/customMatch/addPlayer'><button>Add Player</button></Link>
                 <Link to='/matches/customMatch/selectSquad'><button>Select Squad</button></Link>
                 
               
              </div>
              
              <div className='MatchesOut'>
                  <Outlet/>
              </div>
        </section>
    )
}

export default CustomMatch