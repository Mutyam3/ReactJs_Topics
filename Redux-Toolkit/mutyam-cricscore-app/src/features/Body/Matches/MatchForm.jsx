import React from 'react'
import StepOne from './StepOne'
import {useFormik} from 'formik'
import { useAddMatchMutation } from '../../../services/cricketApi'

function MatchFrom()
{
      const [addMatchFn] = useAddMatchMutation()
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
                 addMatchFn(values)

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

export default MatchFrom