import React from 'react'
import playersDetails from './Data'
import Display from './Display'

function Player()
{
    const [sunriseSquad, setSunriseSquad] = React.useState([...playersDetails])
    const [playingXI, setPlayingXI] = React.useState([])
    
     function selectSquad(ind)
     {
           if(playingXI.length !== 11)
            {
                var temp = [...sunriseSquad]
                var del = temp.splice(ind,1)
                setSunriseSquad([...temp])
                console.log(del)
                setPlayingXI([...playingXI,...del])
        }
           
             

     }

     function unselectedSquad(ind)
     {     
            var temp = playingXI.filter((el, i)=>{
                       return ind !== i // idi true aithene vati values anni temp loki pothai filter return type array 
            })

            setPlayingXI([...temp])
            console.log(playingXI[ind]) // select chesina player vastadi 
            setSunriseSquad([...sunriseSquad, playingXI[ind]])// vadini srh squad vesa

     }
    

    return (
        <div>
           {/* <ul className='playerBox'>
                <h3>Sunrises Indian Squad</h3>
                <span>{sunriseSquad.length===0 ?'(no player in SRH Squad)': '(Click to unselect player)'}</span><br/><br/>
             {
                 sunriseSquad.map((el,indx)=>{

                        return <div style={{color:'green', padding:'10px'}}><li onClick = {()=>{selectSquad(indx)}} >{el}</li></div>
                 })
             }
           </ul>

           <ul className='playerBox'>
                 <h3>PlayingXI-selected - {playingXI.length}</h3>
                 <p>({playingXI.length === 0? '(no player selected)' : '(click to unselect player)'})</p><br/>
             { 
                 playingXI.map((el, ind)=>{

                        return <div style={{color:'blue',padding:'10px'}}><li onClick = {()=>{unselectedSquad(ind)}} >{el}</li></div>
                 })
             }
           </ul> */}

           <Display sunriseSquad = {sunriseSquad} playingXI = {playingXI} selectSquad = {selectSquad} unselectedSquad = {unselectedSquad}/>
            
        </div>
    )
}

export default Player