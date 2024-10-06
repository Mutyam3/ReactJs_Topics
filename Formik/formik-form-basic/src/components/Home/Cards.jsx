import axios from 'axios'
import React from 'react'


function Cards()
{

    const [cardsData, setCardsData] = React.useState([])
    const [Info, setInfo] = React.useState(false)
    const [indx,setIndx] = React.useState(null)

    React.useEffect(()=>{

        axios.get('http://localhost:4000/ExamsInCard').then((res)=>{

            setCardsData([...res.data])

        }).catch(()=>{})
    },[])


    function showInfo(i)
    {
        setIndx(i)
        setInfo(!Info)
        console.log(indx)  
    }

    
   

    return(
        <div className='CardsParent'>
            {
                cardsData.map((el, ind)=>{
                    return (
                        <div className='Cards'>
                            <img src={el.imageUrl} width="200px" height ="300px"/>
                            <h5>{el.examName}</h5>
                             
                          {
                            Info && indx == ind && (<div>
                                <p>Exam Type : {el.examType}</p>
                                <p>Eligibility : {el.eligibility}</p>
                                <p>Exam Date : {el.examDate}</p>
                               </div>
                                ) 
                              
                          }

                         <b onClick = {()=>{ showInfo(ind)}}> {Info && indx == ind ? 'Less Info' : 'More Info'}</b>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards 