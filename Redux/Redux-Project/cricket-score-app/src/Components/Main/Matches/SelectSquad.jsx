import React from 'react'
import axios from 'axios'

function SelectSquad()
{

    const [playersData, setPlayersData] = React.useState([])
    const [TeamOneData, setTeamOneData] = React.useState([])
    const [TeamTwoData, setTeamTwoData] = React.useState([])
    const [toolTip, setToolTip] = React.useState(false)
    const [indx, setIndx] = React.useState('')
    React.useEffect(()=>{
        
        axios.get('http://localhost:5000/PlayersDetails').then((res)=>{

            console.log(res.data)
            setPlayersData(res.data)

        }).catch((err)=>{

            console.log(err)

        })

    }, [])


    function handleSquad(obj, ind)
    {
           console.log([{...obj}])
           var temp = [...playersData]
           temp[ind].status = true
           setPlayersData([...playersData])
    }

    function TeamA(obj, ind)
    {
        console.log([{...obj}])
        var temp = [...playersData]
        temp[ind].status = true
        setPlayersData([...playersData])


        var ob = [...TeamOneData]
        ob.push({...obj})
        setTeamOneData([...ob])
    }

    function TeamB(obj, ind)
    {
        console.log([{...obj}])
        var temp = [...playersData]
        temp[ind].status = true
        setPlayersData([...playersData])

        var ob = [...TeamTwoData]
        ob.push({...obj})
        setTeamTwoData([...ob])
    }

    return (
        <section>
            <h1>SelectSquad</h1>

             <div>
                 <h1>ALL PLAYERS {playersData.length}</h1>
                 
                 <div className = 'createMatch selectSquad' >
                     {
                          playersData && playersData.map((el, ind)=>{
                            return <div className='playersCard'  onMouseEnter =  {()=> {setIndx(ind); setToolTip(true)}} onMouseLeave={()=>{setToolTip(false)}} 
                              style={el.status ? {backgroundColor : 'red', pointerEvents:'none', position:'relative'} : {backgroundColor:'green'}} >
                                        
                                        

                                        <img src={el.photo} width = '100px' height = '100px' />
                                        <h4 style={{borderTop:'2px solid black'}}>{el.fullName}</h4>

                                        {
                                          (toolTip && indx ==ind) && (
                                            <div className='selectSquadBtns'>
                                                <button onClick = {()=>{TeamA(el, ind)}}>Team A</button>
                                                <button onClick = {()=>{TeamB(el, ind)}}>Team B</button>
                                            </div>
                                          )
                                        }

                                   </div>
                                   
                          })
                     }
                 </div>
                 

             </div>

             <div>
                 <h1>TEAM ONE  {TeamOneData.length}</h1>

                 <div className = 'createMatch selectSquad'>
                     {
                        TeamOneData && TeamOneData.map((el)=>{
                            return <div className='playersCard'>
                                      <img src={el.photo} width = '100px' height = '100px'/>
                                      <h4 style={{borderTop:'2px solid black'}}>{el.fullName}</h4>

                                  </div>
                        })
                     }
                 </div>


             </div>

             <div>
                <h1>TEAM TWO  {TeamTwoData.length}</h1>

                <div className = 'createMatch selectSquad'>
                   {
                        TeamTwoData && TeamTwoData.map((el)=>{
                            return <div className='playersCard'>
                                      <img src={el.photo} width = '100px' height = '100px'/>
                                      <h4 style={{borderTop:'2px solid black'}}>{el.fullName}</h4>

                                  </div>
                        })
                     }
                </div>

             </div>
        </section>
    )
}

export default SelectSquad