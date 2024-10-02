import React from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from '../store/reducers/actions'

function Countries(props)
{
    console.log('countries ::', props)

    React.useEffect(()=>{
        props.getCountries()
    }     
    ,[])

    return (
        <div className='App'>

            <h1>Countries</h1>

            {/* <button onClick = {()=>{props.dispatch(getAllCountries())}}>get Countries</button>
              */}
              {
                 props.countries && props.countries.map((country)=>{
                     
                           return <li>{country.name}</li>
                        
                  })
              }
   
        </div>
    )
}

function mapStateToProps(state)
{
        return state.countries
}

function mapDispatchToProps(dispatch)
{
         return {
            getCountries : ()=>{dispatch(getAllCountries())}
         }
}

export default connect(mapStateToProps,mapDispatchToProps) (Countries)