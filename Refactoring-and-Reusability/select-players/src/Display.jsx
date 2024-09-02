import React from 'react'

function Display(props)
{


    return (
        <div id="mainBox">
            <ul className='playerBox'>
                <h3>Sunrises Indian Squad</h3>
                <span>{props.playingXI.length=== 11 ?'(selected 11 players)': '(Click to unselect player)'}</span><br/><br/>
             {
                 props.sunriseSquad.map((el,indx)=>{

                        return <div style={{color:'green', padding:'10px'}}><li onClick = {()=>{props.selectSquad(indx)}} >{el}</li></div>
                 })
             }
           </ul>

           <ul className='playerBox'>
                 <h3>PlayingXI-selected - {props.playingXI.length}</h3>
                 <p>{props.playingXI.length === 0? '(no player selected)' : '(click to unselect player)'}</p><br/>
             { 
                 props.playingXI.map((el, ind)=>{

                        return <div style={{color:'blue',padding:'10px'}}><li onClick = {()=>{props.unselectedSquad(ind)}} >{el}</li></div>
                 })
             }
           </ul>

        </div>
    )

}

export default Display