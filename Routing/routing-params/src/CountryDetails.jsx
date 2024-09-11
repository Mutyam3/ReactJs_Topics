import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function CountryDetails()
{

    var par = useParams()
    
    // idi em chestadi ante params em aithe unnayo avi read chesi oka object lo pettukuntadi 

    // console.log(par)

    var x = useLocation()

    // console.log(x) object isthadi dantlo state lo unati country details

    
    return (
        <div className='App'>
           <h1>Country Details</h1>
           <h2>{x.state.name}</h2>
           <h2>{x.state.capital}</h2>
        </div>
    )
}

export default CountryDetails