import React from "react";
import { Outlet, Link } from "react-router-dom";
import MultiStepFrom from "./MultiStepForm";


function CreateMatch()
{

    const [step, setStep] = React.useState([])

    return(
        <section>


               <div className="m-2 p-2">
                    <MultiStepFrom/>
               </div>

               <div className="m-2 p-2">

               </div>
                      
        </section>
    )
}


export default CreateMatch