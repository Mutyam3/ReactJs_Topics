import React from 'react'
import TeamDetails from './TeamDetails'
import { useGetTeamsQuery } from '../../../services/TeamsApi'
import { useGetVenuesQuery } from '../../../services/cricketApi'
import VenueDetails from './VenueDetails'
import MatchFormat from './MatchFormat'
import Cricketball from '../../../assets/bestCricBallAni.png'

function StepOne({matchDetails})
{

    const {isLoading : isTeamsLoading, data: dataTeams} = useGetTeamsQuery()
    const {isLoading : isVenueLoading, data: dataVenue } = useGetVenuesQuery()


    console.log(dataTeams)

    const [status, setStatus] = React.useState('teamA')
   

           function teamsNameById(id)
           {   
                if(dataTeams)
                {
                    return dataTeams.find((team)=>{
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
                     <input type='text' className='field text-center' disabled value={matchDetails.values.teamAName && teamsNameById(matchDetails.values.teamAName)} placeholder='Team A Name'/>
                 </div>

                 <div> 
                     <div className='border border-light d-flex  m-2 rounded-3 ' style={{height:'100px', width :'190px', overflow:'hidden'}} onClick = {()=>{setStatus('teamB')}}>{matchDetails.values.teamBLogo ? <img src={matchDetails.values.teamBLogo} width='190px' height ='100px'/> : <b>+</b>}</div>
                     <h6 className='text-center'>Team B</h6>
                     <input type='text' className='field text-center' disabled value={matchDetails.values.teamBName && teamsNameById(matchDetails.values.teamBName)}  placeholder='Team B Name'/>
                 </div>

              </div>

              <div className='m-2 p-2 text-center w-100'>

                 <input type='text' value={matchDetails.values.venue.GroundName} className='field text-center w-75' placeholder='venue'  onClick = {()=>{setStatus('venueD')}}/><br/><br/>


                 <input type='date' className='field text-center w-75'  {...matchDetails.getFieldProps('date')}/>  <br/><br/>

                 <input type='time' className='field text-center w-75' {...matchDetails.getFieldProps('time')} /> <br/><br/>
                 
                 <input type='text'  className='field text-center w-75' placeholder='Match Format'  onClick = {()=>{setStatus('matchFormat')}}/><br/><br/>
                 
                 <button type='submit' className='btn btn-primary'>Submit</button>

              </div>
            </section>

            <section className=''>

               { isTeamsLoading && (<><img src= {Cricketball} className='cricBall' /> <b>Loading...</b></>)}

               {
                 !isTeamsLoading && (

                    <>

                    { status==='teamA'  &&  <TeamDetails type = {'TEAMA'}  data = {dataTeams} matchDetails={matchDetails} /> }

                    { status==='teamB'  &&   <TeamDetails type = {'TEAMB'} data = {dataTeams} matchDetails={matchDetails} />}
                    </>

                 )
               }

               {
                  isVenueLoading && <img src= {Cricketball} />
               }

               {
                  !isVenueLoading && (
                      <>
                         { status === 'venueD' &&
                            <VenueDetails data = {dataVenue} matchDetails={matchDetails}/>
                         }
                      </>
                  )
               }

               {

                  status === 'matchFormat'  && <MatchFormat matchDetails={matchDetails}/>
               }

               

            </section>

          
             
        </section>
    )
}

export default StepOne