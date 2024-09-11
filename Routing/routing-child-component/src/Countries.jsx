import React from 'react'
import axios from 'axios'
import {Link, Outlet} from 'react-router-dom'
import CountryDetails from './CountryDetails'

function Countries()
{

    const [countries, setCountries] = React.useState([])

       React.useEffect(()=>{

        axios.get('https://restcountries.com/v2/all').then((res)=>{

            setCountries([...res.data])
        })

       },[])

    return (
        <div className='App'>
            <h1>Countries</h1>
            <div style={{border:"2px solid black", display:'flex', justifyContent:'space-between'}} >
            <ul style={{border:"2px solid black", margin:"20px"}}>
                {
                   countries.map((el)=>{
                             console.log(el)
                           return (
                              <li>
                                  <Link to={`/countries/country/${el.name}`} state={el}>{el.name} </Link>
                            
                              </li>
                           )
                   })
                }
               
            </ul>
           

            <div>
                   <Outlet></Outlet> 
            </div>
            </div>

            
        </div>
    )
}

export default Countries