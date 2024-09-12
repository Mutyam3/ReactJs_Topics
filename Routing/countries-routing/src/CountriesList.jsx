import React from 'react'
import axios from 'axios'


function CountriesList()
{
    const [countries, setCountries] = React.useState([])


    React.useState(()=>{

      axios.get('https://restcountries.com/v2/all').then((res)=>{

          setCountries([...res.data])

      })
      
    },[])
    
    

    return (
        <div>
     
        <div className='GridContainer'>
            {
                countries.map((el)=>{
                    return (
                        
                        <div className='countryList'>
                            <div srtle={{height:"100%"}}><img src={el.flag} width = "200px" height="100%"/></div>
                            <div>
                                 <h2>{el.name}</h2> 
                                 <h2>Population : {el.population}</h2>
                                 <h2>Area : {el.area}</h2>
                            </div>
                             
                            <div>
                                <h2>Capital :{el.capital}</h2>
                                <h2>Region : {el.region}</h2>
                                <h2>Language : {el.languages[0].nativeName}</h2>
                            </div>
                           
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}


export default CountriesList