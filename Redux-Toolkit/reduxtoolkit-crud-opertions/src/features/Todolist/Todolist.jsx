import React from 'react'
import { useAddTodoMutation } from '../../services/todos'

function Todolist()
{

    const [addTodoFn] = useAddTodoMutation()

    const [todo, setTodo] = React.useState({
        title :'',
        status : false
    })

    return (
        <section>

        <h1>Todolist</h1>

        <input type='text' onChange={(e)=>{setTodo({...todo, title : e.target.value})}} />

        <button onClick = {()=>{addTodoFn(todo)}}>AddTodo</button>



        </section>
    )
}

export default Todolist