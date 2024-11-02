import React from 'react'
import { useAddNewTaskMutation, useGetTodoListByIdQuery, useLazyGetTodoListByIdQuery } from '../../services/boardApi'
import { useParams } from 'react-router-dom'

function Todolist()
{

    const {id} = useParams()

    // console.log(x)
       const  [newTodo, setNewTodo] = React.useState('')
       const  { isLoading, data}  =  useGetTodoListByIdQuery(id)
       const  [rqFn]    =   useLazyGetTodoListByIdQuery() // ee useLazyGetTodoListByIdQuery() hook vala getTodolistByIdQuery() malli call ayy
                                                          // data vastadi mari eppudu call cheyali ante database lo data upload aina tarvathe ee function call avvali
       const  [addTodoFn]  =   useAddNewTaskMutation(id) 

        // console.log(data)

    //    function addTodo()
    //    {
    //        var temp = JSON.parse(JSON.stringify(data))
    //        temp.todos.push({task : newTodo, status: false})
    //        console.log(temp)
    //        addTodoFn(temp).then((res)=>{        // ikkada addTodoFn(temp) di asynchronous function so request velli response vachinake rqFn() call cheyali 
    //                                             // so then tho handle chestadi [ee function call aithe data automatic ga update aithadi]
    //             rqFn(id)
    //        })


    //    }

   async function addTodo()
   {
       var temp = JSON.parse(JSON.stringify(data))
       temp.todos.push({task : newTodo, status : false})
       console.log(temp)
       await addTodoFn(temp)        // ikkada await addTodoFn anedi asynchronous function dani temporary ga marchesindi synchronous ga  
                                   // [basic ga asynchronous functions are non-blocking , await will convert that non-blocking nature to blocking nature]
              rqFn(id)
   }

    return (
        <section>
             
             <h3>{ !isLoading && data.title.toUpperCase()}  Todolist</h3>

             
                 { 
                    isLoading && <b>Loading....</b>
                 }

                 <input type='text' onChange={(e)=>{setNewTodo(e.target.value)}}/>
                 <button onClick = {()=>{addTodo()}}>Add Task</button>

                 {
                    !isLoading && data.todos.map((t)=>{
                           return <li>{t.task}</li>
                    })
                 }

        </section>
    )
}

export default Todolist