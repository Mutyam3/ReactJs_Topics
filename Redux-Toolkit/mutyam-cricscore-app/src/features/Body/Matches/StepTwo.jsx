import React from 'react'

function StepTwo({matchDetails, handleBtnFn})
{
    return(
        <section>
             
               <button onClick = {()=>{handleBtnFn(1)}}>Next</button>
        </section>
    )
}

export default StepTwo