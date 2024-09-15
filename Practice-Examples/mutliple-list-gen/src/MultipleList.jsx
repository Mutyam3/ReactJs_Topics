import React from 'react'
import { listDetails } from './data'

function MultipleList()
{


    return (
        <div className='mainContainer'>
            {
                listDetails.map((el)=>{
                    return (
                        <ol className='listContainer' >
                            <h3>{el.title}</h3>
                            {
                                el.items.map((e)=>{
                                    return (
                                        <div className='listDiv'>
                                            <li>{e}</li>
                                        </div>  
                                    )
                                })
                            }
                        </ol>
                    )
                })
            }
        </div>
    )
}


export default MultipleList