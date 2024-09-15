import React from 'react'



function Child(props)
{
    return (
        <div>
             {
                 props.x.map((el)=>{
                    return (
                        <div className='App'>
                            <h2>FirstName : {el.firstName}</h2>
                            <h2>LastName :  {el.lastName}</h2>
                            <h2>Age : {el.age}</h2>
                            <h2>Course : {el.course}</h2>
                        </div>
                    )
                 })
             }
        </div>
    )
}


export default Child