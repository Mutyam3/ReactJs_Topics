import React from "react";
import { Outlet, Link } from "react-router-dom";


function CreateMatch()
{
    return(
        <>
{/* 
             <section className="box marginMania d-flex justify-content-evenly  border border-light  rounded">
                       <Link to='' className="navbartext"><li className="m-2 p-2" type='none'>ADD PLAYER</li></Link>
                       <Link to='' className="navbartext"><li className="m-2 p-2" type='none'>ADD TEAM</li></Link>
                       <Link to='' className="navbartext"><li className="m-2 p-2" type='none'>ADD MATCH</li></Link>


             </section> */}

                      <Outlet/>
        </>
    )
}


export default CreateMatch