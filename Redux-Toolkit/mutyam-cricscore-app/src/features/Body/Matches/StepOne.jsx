import React from 'react'
import TeamDetails from './TeamDetails'
import { useGetTeamsQuery } from '../../../services/TeamsApi'

function StepOne({matchDetails, handleBtnFn})
{

    const {isLoading, data} = useGetTeamsQuery()


       console.log(data)
    const [status, setStatus] = React.useState('teamA')
   

           function teamsNameById(id)
           {   
                if(data)
                {
                    return data.find((team)=>{
                       return team.id == id
                     }).teamName
                }
                    
           }
            

               
           

           


    return (
        <section className='m-2 p-2 border border-light rounded d-flex justify-content-evenly'>
            <section> 
              <div className='d-flex w-75  gap-5 justify-content-evenly align-items-center'>
                 <div> 
                     <div className='border border-light d-flex  m-2 rounded-3' style={{height:'100px', width :'190px', overflow:'hidden'}} onClick = {()=>{setStatus('teamA')}}>{matchDetails.values.teamALogo ? <img src={matchDetails.values.teamALogo} width='190px' height ='100px'/> : <b>+</b> } </div>
                     <h6 className='text-center'>Team A</h6>
                     <input type='text' className='field text-center' value={matchDetails.values.teamAName && teamsNameById(matchDetails.values.teamAName)} placeholder='Team A Name'/>
                 </div>

                 <div> 
                     <div className='border border-light d-flex  m-2 rounded-3 ' style={{height:'100px', width :'190px', overflow:'hidden'}} onClick = {()=>{setStatus('teamB')}}>{matchDetails.values.teamBLogo ? <img src={matchDetails.values.teamBLogo} width='190px' height ='100px'/> : <b>+</b>}</div>
                     <h6 className='text-center'>Team B</h6>
                     <input type='text' className='field text-center'  value={matchDetails.values.teamBName && teamsNameById(matchDetails.values.teamBName)}  placeholder='Team B Name'/>
                 </div>

              </div>

              <div className='m-2 p-2 text-center w-100'>

                 <input type='text' className='field text-center w-75' placeholder='venue'/><br/><br/>
                 <button className='field w-75'>Match Format</button><br/>
                  
                 <button onClick = {()=>{handleBtnFn(1)}}>Next</button>

              </div>
            </section>

            <section className=''>

               { isLoading && (<b>Loading...</b>)}

               {
                 !isLoading && (

                    <>

                    { status==='teamA'  &&  <TeamDetails type = {'TEAMA'}  data = {data} matchDetails={matchDetails} /> }

                    { status==='teamB'  &&   <TeamDetails type = {'TEAMB'} data = {data} matchDetails={matchDetails} />}
                    </>

                 )
               }

               

            </section>

          
             
        </section>
    )
}

export default StepOne