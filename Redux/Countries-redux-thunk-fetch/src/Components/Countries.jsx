import React from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from '../store/reducers/actions'

function Countries(props)
{
    console.log(props)
    return (
        <div className='App'>
            
            <h1>Countries</h1>

            <button onClick = {()=>{props.dispatch(getAllCountries())}}>get Countries</button>
             
              {
                 props.countries && props.countries.countries.map((country)=>{
                     
                           return <li>{country.name}</li>
                        
                  })
              }
   
        </div>
    )
}

export default connect((store)=>{return store}) (Countries)