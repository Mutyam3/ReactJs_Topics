import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function Service()
{

    const [serviceLists, setServiceLists] = React.useState([
        {
           title : "Reactjs Eco System",
           items : ['latest React Features', 'Hooks', 'Redux based', 'V5Routing', 'SEO friendly']
        },
        {
           title : "Angular Eco System",
           items : ["Latest Angular Features", "Typescript", "RxJs", "Firebase", "Deployment"]
        }
     ])
    
    //  console.log(serviceLists[0])
    return(
        <div className='App'>
            <h1>Service - masth chestam pani </h1>
            <h2>Our services</h2>
            <Link to = {`/services/ ${serviceLists[0].title}`} state={{...serviceLists[0]}}>Single page web application development using Angular</Link><br/>
            <Link to = {`/services/ ${serviceLists[1].title}`} state ={{...serviceLists[1]}}>Single page web application development using React</Link>
            
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Service 