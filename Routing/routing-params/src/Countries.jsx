import React from'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Countries()
{

    const [countries, setCountries] = React.useState([])

    React.useEffect(()=>{

         axios.get('https://freetestapi.com/api/v1/countries').then((res)=>{

               setCountries([...res.data])
               console.log(res.data)
         })

    },[])
    return (
        <div className='App'>

            <h1>Countries</h1>

           {
             countries.length>0 &&  countries.map((el)=>{
                
                  return <li>
                             <Link to={"/countryDetails/" + el.name} state={el}>{el.name}</Link>
                         </li>
               })
           }
          

        </div>
    )
}

export default Countries 