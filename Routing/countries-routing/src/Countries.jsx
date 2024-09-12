import React from "react";
import {Outlet} from 'react-router-dom'
import AllCountries from "./AllCountries";

function Countries()
{
   const countryFilters =   [{
          title : 'region',
          countries : ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic']
     },
     {
           title : 'subregion',
           countries: ['Southern Asia', 'Northern Europe', 'Northern Africa', 'Polynesia', 'Middle Africa', 'Caribbean',
             'Antarctica', 'South America','Western Asia', 'Australia and New Zealand', 'Central Europe', 'Eastern Europe',
             'Western Europe','Central America','Western Africa','Northern America','Southern Africa','South Antarctic Ocean',
             'Eastern Africa','South-Eastern Asia','Eastern Asia','Melanesia','Micronesia','Antarctic','Central Asia','North America'
           ]
     }] 
      
      const [selectedBoxes, setSelectedBoxes] = React.useState([])


      function handleRegion(e)
      {
          if(e.target.checked == true)
            {
                setSelectedBoxes([...selectedBoxes,e.target.value])
            }
            else 
            {
                 var temp = selectedBoxes.filter((el)=>{
                          if(el == e.target.value)
                          {
                              return false     
                          }
                          else 
                          {
                                return true  
                          }
                 })
 
                 setSelectedBoxes([...temp])
            }
      }
      
      function handleSubRegion(e)
      {
           if(e.target.checked==true)
           {
               setSelectedBoxes([...selectedBoxes,e.target.value])
           }
           else 
           {
                var temp = selectedBoxes.filter((el)=>{
                         if(el == e.target.value)
                         {
                             return false     
                         }
                         else 
                         {
                               return true  
                         }

                })

                setSelectedBoxes([...temp])
           }
           
      }



    //   console.log(selectedBoxes)




    return (
        <div>
        <h1>Countries</h1>
        <div className="countrySec">
         

          <section className="filterSection">
            <div style={{border:'2px solid black'}}>
                <p>{[...selectedBoxes]}</p>
            </div>
            <div>
               <h2>{countryFilters[0].title}</h2>
               {
                 countryFilters[0].countries.map((el)=>{

                    return (
                        <div>
                            <input type="checkbox" value = {el} onChange= {handleRegion}/> : {el}
                        </div>
                    )
                 })
               }
               
            </div>

            <div>
                 <h2>{countryFilters[1].title}</h2>
                 {
                    countryFilters[1].countries.map((el)=>{
                        return (
                            <div>
                                <input type="checkbox" value={el} onChange= {handleSubRegion}/> : {el}
                            </div>
                        )
                    })
                 }

            </div>
          </section>

          <section>
             {/* <AllCountries></AllCountries> */}
             <Outlet></Outlet>
         </section>

        </div>
        </div>
    )
}

export default Countries
