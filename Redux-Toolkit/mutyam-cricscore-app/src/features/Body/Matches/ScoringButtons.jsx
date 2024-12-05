import React from 'react'
import { useDispatch } from 'react-redux'
import { addRun, addTeamARun, addTeamBRun, addTeamAWicket, addTeamBWicket } from './ScoringSlice'

function ScoringButtons({type})
{
    const scoreButtons = [[{name : 1, run : 1},{name : 2, run : 2},{name : 3, run : 3},{name : 4, run : 4},{name : 6, run : 6}], [{name : 'LB', run : 1}, {name : 'Bye', run : 1}, {name : 'Wide', run : 1}, {name : 'NB', run : 1},{name : 0, run : 0}] ]
    
    const dispatch = useDispatch()

    function handleRuns({name, run})
    {
         
         if(type=='TeamA')
         {
              if(name== 'LB' || name=='Bye' || name=='Wide' || name == 'NB')
              {
                dispatch(addTeamARun({name, run})) 
              }
              else 
              {
                dispatch(addTeamARun({name, run}))
              }
              
         }

         if(type=='TeamB')
         {
          if(name== 'LB' || name=='Bye' || name=='Wide' || name == 'NB')
            {
              dispatch(addTeamBRun({name, run}))
              
            }
            else 
            {
              dispatch(addTeamBRun({name, run}))
            
            }
         }
    }

    function handleExtraBtns({name, run})
    {
      
         if(name=='Out' && type=='TeamA')
         {
             
             dispatch(addTeamAWicket(run))

         }
         if(name=='Out' && type=='TeamB')
          {
              dispatch(addTeamBWicket(run))
          }
    }

    return (
        <section className='m-2 d-flex flex-column border border-light w-50'>
                <div className=''>
                  {
                    scoreButtons[0].map((btn)=>{
                        return <button className='' style={{width:'93px'}} onClick={()=>{handleRuns(btn)}}>{btn.name}</button>
                    })
                  }
                </div>
                <div>
                   {
                    scoreButtons[1].map((btn)=>{
                        return <button  style={{width:'93px'}} onClick={()=>{handleRuns(btn)}}>{btn.name}</button>
                    })
                  }
                </div>
                <div>
                   <button className='w-25' onClick = {()=>{handleExtraBtns({})}}>More</button>
                   <button className='w-25' onClick = {()=>{handleExtraBtns({})}}>Penalty</button>
                   <button className='w-25' onClick = {()=>{handleExtraBtns({})}}>Ov.Thrw</button>
                   <button className='w-25' onClick = {()=>{handleExtraBtns({})}}>Undo</button>
                   <button className='w-25' onClick = {()=>{handleExtraBtns({name:'Out', run:1})}}>Out</button>
                </div>


        </section>
    )
}

export default ScoringButtons