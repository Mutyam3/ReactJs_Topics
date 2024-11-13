import React from "react";
import { Outlet, Link } from "react-router-dom";
import MatchFrom from "./MatchForm";


function CreateMatch()
{

    const [step, setStep] = React.useState([])

    return(
        <section>


               <div className="m-2 p-2">
                    <MatchFrom/>
               </div>

               <div className="m-2 p-2">

               </div>
                      
        </section>
    )
}


export default CreateMatch