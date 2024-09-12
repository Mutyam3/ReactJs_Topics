import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function AllCountries()
{

      const [countries, setCountries] = React.useState([])


      React.useState(()=>{

        axios.get('https://restcountries.com/v2/all').then((res)=>{

            setCountries([...res.data])

        })
        
      },[])

    //   console.log(countries)

   

    function ascend()
    {
          countries.sort((a,b)=>{

            // console.log(a)
            if(a.population < b.population)
            {
                return 1 
            }
            else 
            {
                return -1
            }

         }) 

         setCountries([...countries])
    }

    function descend()
    {

        countries.sort((a,b)=>{

           
            if(a.population < b.population)
            {
                return -1 
            }
            else 
            {
                return 1
            }

         }) 

         setCountries([...countries])

    }

    function search(e)
    {
    //    console.log(e.target.value) 
       
       var temp = countries.filter((el)=>{

                       if(el.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
                       {
                          return true 

                       }
                       else 
                       {
                          return false 
                       }
                  })

        //    console.log([...temp])
          setCountries([...temp])
          
        
    }


    

    return (
        <div>
        <main style={{border:'2px solid black', padding:"10px"}}>
        <section style={{border:'2px solid black', display:'flex', justifyContent:'space-evenly',  gap:'20px', alignItems:'center'}}>
             <h2>Sort by population</h2>
             <p onClick = {ascend}>Ascending</p>
             <p onClick = {descend}>Descending</p>

             <input type="text" onChange = {search} placeholder="search countries"/>
            
             <b><Link to="/countries/countriesList">List</Link></b>
             <b><Link to="/countries/countriesGrid">grid</Link></b>
        </section>

        </main>
        <div className='GridContainer'>
            {
                countries.map((el)=>{
                    return (
                        <div className='countryGrid'>
                           <h1>{el.name}</h1> 
                           <img src={el.flag} width = "200px"/>
                           <h2>Population : {el.population}</h2>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default AllCountries