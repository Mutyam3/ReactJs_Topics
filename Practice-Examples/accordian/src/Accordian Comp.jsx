import React from 'react'
import { accordianDetails } from './data'


function Accordian()
{

    let [indx ,setIndx] = React.useState(null)
    let [add, setAdd] = React.useState('none')

    function show(ind)
    {
        //  console.log(indx)
         setIndx(ind)
         setAdd('block')
         
         if(add == 'block' && ind == indx)
         {
              setAdd('none')
         }
    }

    console.log(add)

    return (
        <section>
            {
                accordianDetails.map((el, ind)=>{
                    return (
                        <div>
                        <div className = "head">
                            <h3>{el.title}</h3>
                            <button onClick = {() =>{show(ind)}}>
                                {   
                                    ind == indx ? 
                                    add == "none"  ? '+' : '-' : '+'

                                }
                            </button>

                        </div>
                        <div className = "matter" style={ind == indx ? {display : `${add}` } : {display : 'none'}} >
                            <p>{el.description}</p>
                        </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Accordian 