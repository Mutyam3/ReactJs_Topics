import React from 'react'

function Todolist()
{

    const [todo, setTodo] = React.useState([{task : 'cinema ki povali', status:true }, {task : 'pay bills', status : false}, {task:'medicine bills', status:false}])
    const [inp, setInp] = React.useState({task : '', status: false})
      function handleTodo(e)
      {
           var temp = {...inp}
               temp.task = e.target.value 
               
            setInp({...temp})
      }

      function add()
      {
          setTodo([...todo, inp]) 
          setInp({task:'', status:false})
      }

      function done(i)
      {
          var temp = [...todo]
              temp[i].status = true 
          setTodo([...temp])
      }

      function undo(i)
      {
            var temp = [...todo]
            temp[i].status = false
            setTodo([...temp])
      }

    return (
        <div>
            <h1>Namaste Todolist uh</h1>

            <input type="text" value = {inp.task} onChange={handleTodo}/>
            <button onClick = {add} style={{backgroundColor:'crimson', color:'white'}}>Add Task</button>

            <ul>
                {
                    todo.map((el, ind)=>{
                          return (
                            <div style={ { display:'flex', gap:'20px',padding:'10px',border: '2px solid black', backgroundColor : el.status ? 'green' : 'red', alignItems:'center' }} >
                                 
                                <li>{el.task}</li>
                                <button onClick = {()=>{done(ind)}}>Done</button>
                                <button onClick = {()=>{undo(ind)}}>Undo</button>
                            </div>
                          )
                    })
                }
            </ul>
        </div>
    )
}

export default Todolist