import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function CustomMatch()
{
    return (
        <section>
              
              <div className='MatchesDiv'>
                 
                 
                 <Link to='/matches/customMatch/addPlayer'><button>ADD PLAYER</button></Link>
                 <Link to='/matches/customMatch/addTeam'><button>ADD TEAM</button></Link>
                 {/* <Link to='/matches/customMatch/selectSquad'><button>SELECT SQUAD</button></Link> */}
                 <Link to='/matches/customMatch/createMatch'><button>ADD MATCH</button></Link>
                 
               
              </div>
              
              <div className='MatchesOut'>
                  <Outlet/>
              </div>
        </section>
    )
}

export default CustomMatch