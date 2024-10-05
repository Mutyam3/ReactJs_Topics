import axios from 'axios'
import React from 'react'


function Cards()
{

    const [cardsData, setCardsData] = React.useState([])
    const [dis, setDis] = React.useState("none")
    const [indx, setIndx] = React.useState(1)
    React.useEffect(()=>{

        axios.get('http://localhost:4000/ExamsInCard').then((res)=>{

            setCardsData([...res.data])

        }).catch(()=>{})
    },[])

    function moreInfo(ind)
    {
        
        if(dis == 'none')
        {
              setDis('block')
                
            
            setIndx(ind)
           
        }
       
          
    }

    function lessInfo(ind)
    {
          if(dis=="block")
          {
            
                setDis('none')
                setIndx(ind)
            
            
          }
    }

    return(
        <div className='CardsParent'>
            {
                cardsData.map((el, ind)=>{
                    return (
                        <div className='Cards'>
                            <img src={el.imageUrl} width="200px" height ="300px"/>
                            <h5>{el.examName}</h5>
                           
                            <div style = { ind == indx ? {display : dis} : {display: "none"}}>
                                <p>Exam Type : {el.examType}</p>
                                <p>Eligibility : {el.eligibility}</p>
                                <p>Exam Date : {el.examDate}</p>
                            </div>

                            {
                               dis=="none" && <b onClick = {()=>{moreInfo(ind)}}>More Info</b> 
                              
                            }

                            {
                               dis == "block" && <b onClick = {()=>{lessInfo(ind)}}>Less Info</b>
                            }

      
                             
                             
                             
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards 