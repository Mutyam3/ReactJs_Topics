import React from 'react'


function Todolist()
{
    console.log("Todolist annaya")
    const [inp, setInp] = React.useState({})
    const [todo, setTodo] = React.useState([{ Task : "Mandhulu order pettali", status: false},{ Task : "Devara cinema ki povali", status: true}, { Task : "shopping ki povali", status: false}])

    
    function txt(e){
        
             
         var temp = {
            Task : e.target.value,
            status : false 

         }

           setInp({...temp})
          
    }

    React.useEffect(()=>{
        console.log("Nenu state update aina prathisari call aitha")
    })

    function add()
    {
          setTodo([...todo,inp])
    }

    function done(indx)
    {
    //    var x = document.getElementsByClassName('list')

    //    x[indx].style.backgroundColor ="green"

        var temp = [...todo]
            temp[indx].status = true 
        setTodo([...temp])
        
    }

    function undo(indx)
    {
        // var x = document.getElementsByClassName('list')

        // x[indx].style.backgroundColor = "red"
        var temp = [...todo]
            temp[indx].status = false  
        setTodo([...temp])

    }


    return (
        <div className='App'>
            <input type="text" onChange={txt}/>
            <button onClick = {add}>Add Task</button>

            <div style={{margin:"10px"}}>
                {
                   todo.map((el, ind)=>{
                       return (
                           <div className="list" style={{backgroundColor:  el.status? 'green' : 'red'}}>
                               <li>{el.Task}</li>
                               <button onClick = {()=> {done(ind)}}>Done</button>
                               <button onClick = {()=>{undo(ind)}}>Undo</button>
                           </div>
                       )
                   })
                }
            </div>
        </div>
    )
}

export default Todolist