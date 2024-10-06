import axios from 'axios'
import React from 'react'

function AboutUs()
{

    const [ aboutUsData, setAboutUsData] = React.useState([])

    React.useEffect(()=>{

        axios.get("http://localhost:4000/about_us").then((response)=>{
            setAboutUsData(response.data)
            console.log(response.data)
        }).catch(()=>{})

    }, [])


    return(
        <div className='App'>

           {
              aboutUsData.map((el)=>{
                console.log(el)
                   return (
                        <section>
                            <h5>{el.organization_name}</h5>
                            <div className='Mission'>
                                <h5>Mission </h5>

                                  <p>{el.mission.statement}</p>
                                  <ul>
                                       {
                                         el.mission.details.map((e)=>{
                                            return (
                                                <li>{e}</li>
                                            )
                                         })
                                       }
                                  </ul>
                            </div>

                            <div className='Mission'>
                                <h5>Vision</h5>

                                 <p>{el.vision.statement}</p>

                                 <ul>
                                    {
                                        el.vision.details.map((e)=>{
                                            return (
                                                <li>{e}</li>
                                            )
                                        })
                                    }
                                 </ul>
                            </div>

                            <div className='Core-Values'>
                                <h5>Core Values</h5>
                            
                                <ul>
                                    {
                                        el.core_values.map((el)=>{
                                            return (

                                                <div>
                                                    <h5 style={{borderBottom:"2px solid black",padding:'10px'}}>{el.value}</h5>
                                                    <p style={{padding:'10px'}}>{el.description}</p> 
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                               
                            </div>

                            <div className='Objectives Mission'>

                                <h5>Objectives</h5>
                                <ul>
                                    {
                                        el.objectives.map((el)=>{
                                            return (
                                                <li>{el}</li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>

                            <div className='History'>

                                <h5>History</h5>
                                <b> Establishment Year{el.history.establishment_year}</b>
                                <p> Background : {el.history.background}</p>
                                   <h5>Milestones</h5>
                                <ul>

                                    {
                                        el.history.milestones.map((el)=>{
                                            return <div>
                                                    <b>{el.year}</b> 
                                                    <p>{el.achievement}</p>
                                            </div>
                                        })
                                        
                                    }
                                </ul>

                            </div>

                            <div className='Team'>
                                <h5>Team</h5>
                             
                             {
                                 el.team.leadership.map((el)=>{
                                    return <div>
                                               <b> Name : {el.name}</b>
                                               <p><b>Position :</b> {el.position}</p>
                                               <p><b>Bio :</b> {el.bio}</p>
                                           </div>
                                 })
                             }

                            </div>

                            <div className='Staff'> 
                                <h5>Staff</h5>
                                <b>Total_employees : {el.team.staff.total_employees}</b>
                             <ul>
                                {
                                    el.team.staff.departments.map((e)=>{
                                        return <li>{e}</li>
                                    })
                                }
                             </ul>
                               
                            </div>

                            <div className='Services'>
                                <h5>Services</h5>
                                <b>Exam Portfolio</b>
                                <ul>
                                    {
                                        el.services.exam_portfolio.map((e)=>{
                                            return <li>{e}</li>
                                        })
                                    }
                                </ul>

                                <b>Technological Solutions</b>

                                <ul>
                                    {
                                        el.services.technological_solutions.map((e)=>{
                                            return <div>
                                                      <p><b>Service : </b> {e.service}</p> 
                                                      <p><b>Description : </b> {e.description}</p>
                                                  </div>
                                        })
                                    }
                                </ul>
                            </div>

                        </section>
                   )
              })
           }
           
        </div>
    )
}

export default AboutUs