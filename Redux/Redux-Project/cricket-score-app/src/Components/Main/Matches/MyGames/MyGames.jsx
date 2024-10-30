import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import axios from 'axios'
import MyMatches from './MyMatches/MyMatches'

function MyGames()
{

    const [matchDate, setMatchDate] = React.useState(null)
    const [matches,setMatches] = React.useState([])
    const [teams, setTeams] = React.useState([])

    React.useEffect(()=>{

        axios.get('http://localhost:5000/Teams').then((res)=>{

            setTeams([...teams, ...res.data])
            console.log([...res.data])

        })
          

    },[])


    React.useEffect(()=>{

        axios.get('http://localhost:5000/CricketMatches?matchDate='+ matchDate).then((res)=>{

            setMatches([...matches, ...res.data])
            console.log([...res.data])

        })

    },[matchDate])

   

    return (
        <section>
             <h1>MyGames</h1>


             <div>
                 
                 <input type="date" onChange={(e)=>{setMatchDate(e.target.value)}} name='MatchDate'  className='AddPlayerFields'/>

             </div>

           <section style={{display:'flex', flexWrap:'wrap'}}>
             {
                matches && <MyMatches matches = {matches} teams = {teams}/>

             }
          </section>

          <Outlet/>
             

             
              
        </section>
    )
}

export default MyGames