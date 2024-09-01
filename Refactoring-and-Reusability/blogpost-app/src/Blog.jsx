import React from 'react'
import postDetails from './Data'
import Posts from './Post'

function Blog()
{
     const [t, setT] = React.useState("")
     const [con, setCon] = React.useState("")
     const [i,setI] = React.useState("")
     const [obj, setObj] = React.useState(postDetails)
    //  const [likes, setLikes] = React.useState(0) 
    //  const [dislikes, setDisLikes] = React.useState(0)

     function titleText(e)
     {
          setT(e.target.value)   
     }

     function contentText(e)
     {
          setCon(e.target.value)  
     }

     function uplImg(ev)
     {
            console.log(ev.target.value)
            var url =  window.URL.createObjectURL(ev.target.files[0])
            console.log(url)
            setI(url)

     }

     function add()
     {
          var title = t 
          var content = con 
          var likes = 0
          var dislikes = 0
          var image = i

             var temp = {title,content,likes,dislikes,image}
             console.log(temp)
             console.log([...obj,{...temp}])
             setObj([...obj,{...temp}])

            setT('')
            setCon('') 
            setI('')
           
     }

     function incLike(ind)
     {
          var temp = [...obj]  
              temp[ind].likes++
          setObj([...temp])
 
     }

     function decLike(ind)
     {
           var temp = [...obj]
                  temp[ind].dislikes++ 
            setObj([...temp])
     }

     return (
        <div id="MainBox">
          <div id="inputBox">
               <label for="title">
                Title : <br/><input type="text" id="title" placeholder='Enter Title' value={t} onChange={titleText} style={{padding:"8px", borderRadius:"8px"}} /></label> <br/>
               <label>Upload Image : <input type="file" onChange={uplImg} /></label><br/>
               <label for="content">
                Content : 
               <br/><textarea cols="40" rows="5" id="content"  value= {con} onChange= {contentText} style={{borderRadius:"8px" ,border:'2px solid black'}}/>
               </label><br/>
               <button onClick = {()=>{add()}}>Add Post</button>
           </div>
           <Posts manaObject = {obj} incLike = {incLike} decLike = {decLike}></Posts>
            
        </div>
     )
}


export default Blog