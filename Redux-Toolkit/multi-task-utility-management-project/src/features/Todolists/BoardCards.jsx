import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteTodolistMutation, useLazyGetAllTodoListsQuery } from '../../services/boardApi'

function BoardCards(props)
{

           const [delTodolistFn] =  useDeleteTodolistMutation()
           const  [rqFn]                  =  useLazyGetAllTodoListsQuery()

         async  function handleDeleteTodolist()
           {
                  await delTodolistFn(props.todolist.id)
                  rqFn()
           }

    return (
                 <div class="card w-25 m-4">
                
                     
                       <h5 class="card-header d-flex justify-content-between">{props.todolist.title.toUpperCase()}
                       <i class="bi bi-trash3 text-danger" onClick = {()=>{handleDeleteTodolist()}}></i>
                       </h5>
                       


                   <div class="card-body  d-flex flex-column justify-content-between">
                           <h5 class="card-title">Total : {props.todolist.todos.length}</h5>
                           
                             <ul className='w-35' style={{height : '75px' ,overflowY:'scroll'}}>
                                {
                                    props.todolist.todos.map((el, ind)=>{
                                        return (
                                            <li key = {`${el.task}+${ind}`}>{el.task}</li>
                                        )
                                    })
                                }
                             </ul>


                           <Link to={`/todolist/${props.todolist.id}`} class="btn btn-primary">Add / View</Link>
                           
                    </div>

                  </div>
     
    )

}


export default BoardCards