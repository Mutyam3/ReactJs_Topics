import React from "react"
  
import todosItems from "./data"
import Dis from "./Display"

   function TodoList()
   {
       const [todos , setTodos] = React.useState(todosItems)
       const [val, setVal] = React.useState('')
    //    const [col, setCol] = React.useState("red")

       function txt(e)
       {
             setVal(e.target.value)
       }

       function add()
       {
             setTodos([...todos, val])
             setVal('')
       }

       function del(ind)
       {
            var temp = [...todos] 
                 temp.splice(ind,1)
              setTodos([...temp])
       }

      var done = (c, b) =>
       {
            console.log(c)
            console.log(b)

           var x = document.getElementsByTagName('li')
          
           x[c].style.backgroundColor = b
            
       }
   
       var undo = (c, b) =>
        {
            //  setCol(c)
            console.log(c)
            console.log(b)
            var x = document.getElementsByTagName('li')
            x[c].style.backgroundColor = b
        }
    

       return (
           <div>
              <div id="inputContainer">
                   <input type="text" value={val} onChange={txt}/>
                   <button onClick = {add}>Add Task</button>
               </div>

               <ul id="itemsContainer">
                  {
                     todos.map((el, i)=>{
                        
                        return (

                             <Dis tod={el} del={del} ind={i}  key={i} done={done} undo={undo} ></Dis>
                           
                         )
                               
                     })
                  }
               </ul>
           </div>
       )
   }

export default TodoList