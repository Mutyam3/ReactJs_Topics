<<<<<<< HEAD:src/Todo.jsx
import React from 'react';

// component is a reusable state, logic and template through component 
// [ ee three ni nenu reuse chestuna adi ela ante component dwara]

function TodoList()
{
    // state 
    
    const [task, setTask] = React.useState(["medicine","shopping", "Passport Appointment"])
    const [t, setT] = React.useState('')
    // logic 


    const txt = (e)=>{

        setT(e.target.value)

    }

    const add = ()=>{
           
         setTask([...task,t])
         setT('')

    }

    const del = (ind)=>{
             task.splice(ind,1)
             setTask([...task])
    }

    // const update = ()=>{
         
          

    // }

  

    


    // template 

    return (
        <div className='myBox'>
           
            <h1>TodoList</h1>
            

           <div id="myInput">
               <input type="text" value={t} onChange={txt} ></input>
               <button id="btnTask" style={{backgroundColor:"green", color:"white"}}   onClick = {add}>Add Task</button>
               {/* <button id="updTask"  onClick = {update}>Update</button> */}
            </div> 


           <ul style={{paddingLeft:"0px"}}>
              {
                task.map((el, i)=>{
                    return <li>{el}  &nbsp; &nbsp; &nbsp; 
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
=======
import React from 'react';

// component is a reusable state, logic and template through component 
// [ ee three ni nenu reuse chestuna adi ela ante component dwara]

function TodoList()
{
    // state 
    
    const [task, setTask] = React.useState(["medicine","shopping", "Passport Appointment"])
    const [ t, setT] = React.useState('')
    // logic 

    const txt = (e)=>{
        setT(e.target.value)

    }

    const add = ()=>{
           
         setTask([...task,t])

    }

    const del = (ind)=>{
             task.splice(ind,1)
             setTask([...task])
    }

    let editIndex;
    var setTxt;

    const edit = (indx)=>{
        editIndex = indx 
        console.log(editIndex)

         setTxt =  task[indx]
         console.log(setTxt)

        document.getElementById('editBtn').style.display = "none"

       var x = document.createElement('button')
               x.onclick = {
                              
                           }
        
        
    }
    // template 

    return (
        <div className='myBox'>
           
            <h1>TodoList</h1>
            

           <div id="myInput">
               <input type="text" onChange={txt} defaultValue={setTxt}></input>
               <button id="btnTask" style={{backgroundColor:"green", color:"white"}} onClick = {add}>Add Task</button>
            </div> 


           <ul style={{paddingLeft:"0px"}}>
              {
                task.map((el, i)=>{
                    return <li>{el}  &nbsp; &nbsp; &nbsp; 
                    <button onClick ={()=>{edit(i)}} id="editBtn">Edit</button>
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
>>>>>>> 299d56f26a4e5afe9c695d1189c4bea50a04d51c:Counter-and-todo-app/src/Todo.jsx
