import React from 'react'
import { Link } from 'react-router-dom'


function MyMatches({matches,teams})
{

  

    function handleCards(el)
    {
        console.log('el ::', el)      
    }

    function getTeamNameById(manaId)
    {
       return teams.find((t)=>{
            return t.id == manaId
        }).teamName

    }

   

    function getTeamById(manaTeamId)
    {
        return teams.find((t)=>{
             return t.id == manaTeamId
        })
    }


    return (
       <>
               
                
                  {
                       matches && matches.map((el)=>{
                            return (
                                    
                                        <section className='MatchCards'>

                                        <div className='CardFirstLine'>
                                                <p>Match Date : {el.matchDate}</p>
                                                <p>Match Time : {el.matchTime}</p>
                                        </div>
                                      

                                       <div className='CardBody'>
                                           <div className='CardFirstLine'>
                                            <div>
                                               <img src= {el.teamAImage} width = "100px" height='80px'/>
                                               <p>{getTeamNameById(el.teamAName)}</p>
                                            
                                            </div>  

                                                    <span> VS </span>

                                            <div>
                                                <img src = {el.teamBImage} width = "100px" height='80px'/>
                                                <p>{getTeamNameById(el.teamBName)}</p>
                                            </div>
                                          </div>

                                            <div className='CardFirstLine'>
                                                <p>Overs : {el.overs}</p>
                                                <p>Wickets : {el.wickets}</p>
                                            </div>
                                            
                                         
                                       </div>

                                       <div className='CardLastLine'>
                                            <div style={{display: 'flex', gap : '10px', alignItems:'center'}}>
                                                <img src = {el.venue.GroundImage} width='130px' height = '90px'/>
                                                
                                            <div>
                                               <h4>{el.venue.GroundName}</h4>
                                               <div style={{display:'flex' , justifyContent:'space-evenly'}}>
                                                <div>
                                                   <p>{el.venue.Address}</p>
                                                </div>

                                                <div>
                                                   <p>{el.venue.Capacity}</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                            <Link to = {`/matches/${el.id}`}  state = {el}><button onClick = {()=>{handleCards(el)}}>Give Scoring</button></Link>

                                       </div>


                                   </section>
                            )   
                       })
                  }
                

                </>
    )
}

export default MyMatches