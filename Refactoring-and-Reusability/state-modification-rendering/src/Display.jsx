import React from 'react'

function Dis(props)
{


     return(
        <div id="main-div">
        <ul className="Box">

        {
            props.list1.map((el, ind)=>{
               return (
                   <div style={{border:"2px solid black", padding:"15px 25px", margin:"10px" }} 
                   onClick = {()=>{props.removeOne(ind)}}>
                      <li>
                         {el} 
                      </li>
                  </div>
               )
            })
        }

   </ul>


   <ul className="Box">

        {
            props.list2.map((el, ind)=>{
               return (
                   <div style={{border:"2px solid black", padding:"15px 25px", margin:"10px" }}
                   onClick = {()=>{props.removeTwo(ind)}}>
                      <li>
                         {el}
                      </li>
                  </div>
               )
            })
        }
       

   </ul>

</div>
     )
}

export default Dis