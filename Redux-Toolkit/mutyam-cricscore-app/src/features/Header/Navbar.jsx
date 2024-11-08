import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/Mutyam cricscore (1).png'
import HoverDiv from './HoverDiv'

function Navbar()
{
    // const [hoverVar, sethoverVar] = React.useState()
    const hoverVar = [{
                         dashboard : 'Dashboard',
                         dashboardPath : '/matches/matches-dashboard',
                         custom : 'CreateMatch',
                         customPath : '/matches/create-match'
                         
                      },
                      {
                         dashboard : 'Dashboard',
                         dashboardPath : '/teams/teams-dashboard',
                         custom : 'CreateTeams',
                         customPath :'/teams/create-teams'
                          
                      },
                      {
                          dashboard : 'Dashboard',
                          dashboardPath : '/players/players-dashboard',
                          custom : 'CreatePlayers',
                          customPath : '/players/create-players'
                      }
                    ]

    return (
        <section className = 'box marginMania border border-light  rounded'> 

           <div className='d-flex justify-content-evenly align-items-center p-2'>
               <Link to='/home' ><img src= {Logo} width='200px' height='100px'/></Link>
               <Link to='/matches' className='navbartext hoverDiv'><li className='m-2 p-2' type='none'>Matches <HoverDiv hoverVar = {hoverVar[0]}/></li></Link>
               <Link to='/teams' className='navbartext hoverDiv'><li className='m-2 p-2' type='none'>Teams   <HoverDiv hoverVar = {hoverVar[1]}/></li></Link>
               <Link to='/players' className='navbartext hoverDiv'><li className='m-2 p-2' type='none'>Players <HoverDiv hoverVar= {hoverVar[2]}/></li></Link>
               <Link to='/products' className='navbartext'><li className='m-2 p-2' type='none'>Products</li></Link>

               {/* <i class="bi bi-moon fs-3"></i> */}
            </div> 

        </section>

    )
}

export default Navbar