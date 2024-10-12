import axios from 'axios'
import React from 'react'

function AboutUs()
{

    const [ aboutUsData, setAboutUsData] = React.useState([])
    const [Info , setInfo] = React.useState(true)
    const [indx , setIndx] = React.useState(null)

    React.useEffect(()=>{

        axios.get("http://localhost:4000/about_us").then((response)=>{
            setAboutUsData(response.data)
            console.log(response.data)
        }).catch(()=>{})

    }, [])

    
        function hide(ind)
        {
                setIndx(ind)
                setInfo(!Info)
                
        }

      
   

    return(
        <div className='App' style={{backgroundColor:'rgb(27,56,125)', margin:'20px', borderRadius: '12px'}}>

           {
              aboutUsData.map((el)=>{
                console.log(el)
                   return (
                        <section>
                            <h5 style={{color:'whitesmoke'}}>{el.organization_name}</h5>
                            <div className='Mission'>
                               <div className='d-flex justify-content-between p-2'> <h5>Mission </h5>  <span onClick={()=>{hide(el.mission.id)}}> {Info && indx == el.mission.id ?'-' : '+'}</span></div>

                                  <p>{el.mission.statement}</p>
                               {
                                 Info && indx == el.mission.id && (
                                    <ul>
                                    {
                                      el.mission.details.map((e)=>{
                                         return (
                                             <li>{e}</li>
                                         )
                                      })
                                    }
                                   </ul>
                                 )
                               }
                            </div>

                            <div className='Mission'>
                                <div className='d-flex justify-content-between p-2'><h5>Vision</h5>  <span onClick = {()=>{hide(el.vision.id)}}> {Info && indx == el.vision.id ?'-' : '+'}</span></div>
                                

                                 <p>{el.vision.statement}</p>
                                {
                                    Info && indx == el.vision.id && (
                                        <ul>
                                        {
                                            el.vision.details.map((e)=>{
                                                return (
                                                    <li>{e}</li>
                                                )
                                            })
                                        }
                                     </ul>
                                    )
                                }
                                
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

                            <div className='d-flex justify-content-between'><h5>Objectives</h5> &nbsp;&nbsp;&nbsp; <span onClick = {()=>{hide(el.objectives.id)}}>{Info && indx == el.objectives.id ? '-' : '+'}</span></div>

                              { Info && indx == el.objectives.id && 
                                (<ul>
                                    {
                                        el.objectives.List.map((el)=>{
                                            return (
                                                <li>{el}</li>
                                            )
                                        })
                                    }
                                </ul>)
                              }

                            </div>

                            <div className='History'>
                               <div className='HistoryOne'>
                                    <h5>History</h5>
                                    <b> Establishment Year{el.history.establishment_year}</b>
                                    <p> Background : {el.history.background}</p>
                                </div>
                               <div className='Milestone Core-Values'>
                                <h5>Milestones</h5>
                                <ul>

                                    {
                                        el.history.milestones.map((el)=>{
                                            return <div>
                                                    <p><b>{el.year}</b></p> 
                                                    <p>{el.achievement}</p>
                                            </div>
                                        })
                                        
                                    }
                                </ul>
                                </div>

                            </div>

                            <div className='Team'>
                                <h5>Team</h5>
                             {
                                 el.team.leadership.map((el)=>{
                                    return <div>
                                              <div className='TeamOne'>
                                                  <p><b> Name :   </b> {el.name}</p>
                                                  <p><b>Position: </b> {el.position}</p>
                                                  <span onClick = {()=>{hide(el.id)}}> { !Info && el.id == indx ? '-' : "+"  }</span>
                                              </div>
                                              
                                              { indx == el.id && !Info && <p className='closedTeam'><b>Bio :</b> {el.bio}</p> } 
                                           </div>
                                 })
                             }

                            </div>

         

                        </section>
                   )
              })
           }
           
        </div>
    )
}

export default AboutUs