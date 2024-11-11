import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import {useFormik} from 'formik'

function MultiStepFrom()
{
   const matchDetails =  useFormik({
              initialValues : {
                 
                  teamAName : '',
                  teamBName : '',
                  teamALogo : '',
                  teamBLogo : '',
                  venue : ''

              },
              onSubmit : (values)=>{
                console.log(values)
              }

    })


    const [stepIndex, setStepIndex] = React.useState(0)

    const handleBtn = (manaStep)=>{

               setStepIndex(prev=>prev + manaStep)
    }

    return (
        <section>
            <form onSubmit={matchDetails.handleSubmit}>

            
                {stepIndex === 0 && <StepOne matchDetails = {matchDetails} handleBtnFn={handleBtn}/>}
                {stepIndex === 1 && <StepTwo matchDetails = {matchDetails} handleBtnFn={handleBtn}/>}
                {stepIndex === 2 && <StepThree matchDetails = {matchDetails} handleBtnFn={handleBtn}/>}


            </form>
        </section>
    )
}

export default MultiStepFrom