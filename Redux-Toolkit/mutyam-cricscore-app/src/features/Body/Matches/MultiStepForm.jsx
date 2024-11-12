import React from 'react'
import StepOne from './StepOne'
import {useFormik} from 'formik'

function MultiStepFrom()
{
   const matchDetails =  useFormik({
              initialValues : {
                 
                  teamAName : '',
                  teamBName : '',
                  teamALogo : '',
                  teamBLogo : '',
                  venue : '',
                  date  :'',
                  time : '',
                  overs :'',
                  matchFormat : '',
                  wickets : ''

              },
              onSubmit : (values)=>{
                console.log(values)
              }

    })



    return (
        <section>
            <form onSubmit={matchDetails.handleSubmit}>

            
             <StepOne matchDetails = {matchDetails} />
               


            </form>
        </section>
    )
}

export default MultiStepFrom