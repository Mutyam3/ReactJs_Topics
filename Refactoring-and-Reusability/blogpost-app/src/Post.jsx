import React from 'react'

function Posts(props)
{
    return (
        <div>
             {
               props.manaObject.map((el, indx)=>{
                    return <div id="postBox">
                         <h1>{el.title}</h1>
                         <div style={{borderRadius:"20px"}}>
                             <img src={el.image} width="100%" style={{borderRadius:"20px"}} />
                         </div>
                         <p style={{fontWeight:"bold", fontSize:"large"}}>{el.content}</p>
                         <div id="postBtn">
                             <button onClick = {()=>{props.incLike(indx)}} style={{backgroundColor:"green", color:"whitesmoke"}}>Likes : <span>{el.likes}</span></button>
                             <button onClick = {()=>{props.decLike(indx)}} style={{backgroundColor:"crimson", color:"whitesmoke"}}>DisLikes : <span>{el.dislikes}</span></button>
                         </div>
                    </div>
               }) 
             }
        </div>
    )
}

export default Posts 