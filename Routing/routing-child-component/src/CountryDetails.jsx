import React from 'react'
import { Outlet, useLocation, useParams, Link } from 'react-router-dom'

function CountryDetails()
{

    var x = useParams()

    var d = useLocation()
    console.log(d)


    return(
        <div className='App'>
            <h1>{d.state.name}</h1>
            <img src = {d.state.flags.png}  width="300px" height="150px"/>
            <h3>{d.state.capital}</h3>
            <Link to="/home"><button>Go to Home</button></Link>
            <button>Go Back</button>
        </div>
    )
}

export default CountryDetails