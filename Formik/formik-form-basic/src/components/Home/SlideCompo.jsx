import axios from 'axios'
import React from 'react'


function SlideCompo()
{

    const [slideData, setSlideData] = React.useState([])
    const [ind, setInd] = React.useState(3)
    

    React.useEffect(()=>{

        axios.get('http://localhost:4000/Header-Images').then((res)=>{
                
            setSlideData([...res.data])

        })
    },[])

    function Forward()
    {
        if(ind >= slideData.length-1)
        {
            setInd(0)
        }
        else {
            
          setInd(ind + 1)

        }
        
    }

    function Previous()
    {
        if(ind==0)
        {
            setInd(slideData.length-1)

        }else{
            setInd(ind - 1)
        }
        
    }


    return(
        <div className='SlideCompo'>
            
                <img src={
                 slideData[ind] 
                } width ="100%" height = "500px" />

               <div className='slideBtn'>
                    <i class="bi bi-caret-left-fill slideBtnLeft" onClick={Previous}></i>
                    <i class="bi bi-caret-right-fill slideBtnRight" onClick = {Forward}></i>
               </div>
               
        </div>
    )
}

export default SlideCompo