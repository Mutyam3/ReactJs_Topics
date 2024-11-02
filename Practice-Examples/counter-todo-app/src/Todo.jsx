import React from 'react'


// component is a reusable state, logic and template through component 
// [ ee three ni nenu reuse chestuna adi ela ante component dwara]
function TodoList()
{
       //state 

       const[todo, setTodo] = React.useState(["Medicine", "Shopping", "Cinema"])
       const[task, setTask] = React.useState("")
       

       // logic 
         const item =(ev)=>{     

            setTask(ev.target.value) 

         }

         const add = ()=>{
              
             setTodo([...todo , task])
             setTask("")

         }

         const del = (indx)=>{

                var temp = [...todo]
                  
                  temp.splice(indx, 1)
            
                setTodo([...temp])
         }


       //template 
       return (
            <div id="todoBox">
                <h1>Todo - App</h1>

                <div>
                    <input type="text" value={task}  onChange = {item}/>
                    <button onClick = {add}>Add Task</button>
                </div>
                <ul style={{paddingLeft:"0px"}}>
                    {
                         todo.map((el, i)=>{
                               return <li key={i}>{el} &nbsp; &nbsp;&nbsp;
                                      
                                      <button onClick = {()=>{del(i)}}>Delete</button>
                                      </li>
                         })
                    }
                </ul>
            </div>
       )


}


export default TodoList
// okavela manaki chala component export cheyali ante just defult tesi export component Name ivvandi 