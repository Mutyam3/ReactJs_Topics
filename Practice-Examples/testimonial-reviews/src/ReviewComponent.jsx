import React from 'react'
import reviewDetails from './data'


function ReviewCompo()
{

    let [indx , setIndx] = React.useState(0)

    function backwardFn()
    {
         if(indx==0)
         {
            setIndx(reviewDetails.length-1)
         }
         else 
         {
            setIndx(indx - 1)
         }
    }

    function forwardFn()
    {
           if(indx == reviewDetails.length-1)
           {
               setIndx(0)
           }
           else
           {
               setIndx(indx + 1)
           }
    }

    function suprise()
    {
        backwardFn()
        forwardFn()
    }


    return (
        <div>
            <section className='reviewSection'>
                <div className = "imgDiv"><img src={reviewDetails[indx].image}/></div>
                <div>
                    <h3>{reviewDetails[indx].name}</h3>
                    <b>{reviewDetails[indx].role}</b>
                    <div style={{margin:"20px"}}>
                       <p>"{reviewDetails[indx].review}"</p>
                    </div>
                    

                <div id="svgBtn">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16" onClick = {backwardFn}>
                           <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" onClick = {forwardFn}>
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                   
                </div>
                   <button  onClick = {suprise}>Suprise Me</button>
                </div>
            </section>
        </div>
    )
}

export default ReviewCompo