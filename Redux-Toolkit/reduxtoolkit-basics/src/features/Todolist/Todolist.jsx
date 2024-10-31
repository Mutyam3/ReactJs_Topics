import React from 'react'
import { addTodo, newTodoFn } from './todolistSlice'
import { useSelector, useDispatch } from 'react-redux'

function Todolist()
{

        const {todos} =  useSelector(state=>state.todolist)
        console.log(todos)
        const dispatch = useDispatch()


    return (
        <section>
             <h1>Todolist</h1>

             <input type='text' onChange = {(e)=>{dispatch(newTodoFn(e.target.value))}}/>
             <button onClick = {()=>{dispatch(addTodo())}}>Add Todo</button>

            
                {
                   
                    todos?.map((el)=>{
                        return <li>{el}</li>
                    })
                    
                }
             



        </section>
    )
}

export default Todolist