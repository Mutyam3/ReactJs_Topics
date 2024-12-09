import React from 'react'
import { useGetTeamsQuery } from '../../../services/TeamsApi'
import { useGetMatchesQuery, useGetVenuesQuery } from '../../../services/cricketApi'
import MatchCard from './MatchCard'
import Cricketball from '../../../assets/bestCricBallAni.png' 

function MatchDashboard()
{
      const {isLoading : matchLoading, data : matchData}    =   useGetMatchesQuery()
      const {isLoading : teamsLoading, data : teamsData}    =   useGetTeamsQuery()
      const {isLoading : venueLoading, data : venueData}    =   useGetVenuesQuery()
    
      const [matchCompo, setMatchCompo]  = React.useState([])

    //   console.log(matchCompo)

      React.useEffect(()=>{

           if(matchData && matchData.length>0)
           {
                setMatchCompo([...matchData])
           }  
           
      },[matchData])

      function teamsNameById(id)
      {   
           if(teamsData)
           {
               return teamsData.find((team)=>{
                  return team.id == id
                }).teamName
           }
               
      }

      function handleFilterMatches(e, type)
      {
            if(type == 'DATE')
            {
            console.log(e.target.value)
            var temp = [...matchData]
            temp =  matchData.filter((m)=>{
                  if(m.date == e.target.value){
                         return true
                  }
                  else 
                  {
                        return  false
                  }
             }) 

            setMatchCompo([...temp])
            }

            if(type == 'TEAM')
            {
                console.log(e.target.value)
                var temp = [...matchData]
                temp =  matchData.filter((m)=>{
                      if(m.teamAName == e.target.value || m.teamBName == e.target.value){
                             return true
                      }
                      else 
                      {
                            return  false
                      }
                 }) 
    
                setMatchCompo([...temp])
            }

            if(type=='VENUE'){

                console.log(e.target.value)
                var temp = [...matchData]
                temp = matchData.filter((m)=>{
                        if(m.venue.GroundName == e.target.value)
                        {
                            return true
                        }
                        else 
                        {
                            return false
                        }
                })

                setMatchCompo([...temp])
            }
        
      }

    return (
        <>
               <h4>Match Dashboard</h4>

               {teamsLoading && <><img src= {Cricketball} className='cricBall' /> <b>Loading....</b></> }
               {venueLoading && <><img src= {Cricketball} className='cricBall' /> <b>Loading....</b></> }

               <section className='d-flex justify-content-evenly m-3 p-3'>
                     <h5>Sort by </h5>
                    

                        <input type='date' className='field text-light' onChange = {(e)=>{handleFilterMatches(e, 'DATE')}} />
                         
                        <select className='field' onChange={(e)=>{handleFilterMatches(e, 'TEAM')}}>
                            <option value={null} disabled selected>Teams</option>
                            {
                                !teamsLoading && teamsData.map((el)=>{
                                    return (
                                        <option value={el.id} >
                                               <h3>{el.teamName}</h3>
                                        </option>
                                    )
                                })
                            }
                        </select>


                        <select className='field' onChange = {(e)=>{handleFilterMatches(e,'VENUE')}}>
                            <option value={null} disabled selected>Venues</option>
                             {
                                !venueLoading && venueData.map((el)=>{
                                    return (
                                        <option>
                                             <h3>{el.GroundName}</h3>
                                        </option>
                                    )
                                })
                             }
                             
                        </select>
                    
                  
               </section>
               {matchLoading && <b>Loading......</b>}

               { !matchLoading &&  <MatchCard   matchCompo = {matchCompo} teamsNameById = {teamsNameById}/>}

             
        </>
    )
}

export default MatchDashboard