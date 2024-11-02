import React from 'react'
import { Link } from 'react-router-dom'

function BoardCards(props)
{
    return (
                 <div class="card w-25 m-4">
                
                       <h5 class="card-header">{props.todolist.title.toUpperCase()}</h5>

                   <div class="card-body  d-flex flex-column justify-content-between">
                           <h5 class="card-title">Total : {props.todolist.todos.length}</h5>
                           
                             <ul className='w-35'>
                                {
                                    props.todolist.todos.map((el)=>{
                                        return (
                                            <li>{el.task}</li>
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