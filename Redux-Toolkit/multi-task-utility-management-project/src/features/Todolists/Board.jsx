import React from 'react'
import { useAddTodolistMutation, useLazyGetAllTodoListsQuery } from '../../services/boardApi'

import { Outlet } from 'react-router-dom'
import BoardMaster from './BoardMaster'

function Board()
{

            const [newTodolistTitle, setNewTodolistTitle] = React.useState('')
            const [newAddTodolistFn]        =     useAddTodolistMutation()
            const [rqFn]  = useLazyGetAllTodoListsQuery()

         async  function handleAddTodolist()
           {
                // alert(newTodolistTitle)

                var newTodolist = {
                    title : newTodolistTitle,
                    todos : []
                }

               await newAddTodolistFn(newTodolist)
                      rqFn()
           }


    return (
        <section>
         
          
           
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 + Add Todolist
              </button>


                 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Todolist Title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                         <div class="modal-body">

                            <input type="text" size='56'  onChange={(e)=>{setNewTodolistTitle(e.target.value)}}/>
        
                         </div>
                           <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                             <button type="button" class="btn btn-primary" onClick = {handleAddTodolist}>Submit</button>
                          </div>
                          </div>
                          </div>
                   </div>

              <Outlet/>
            

        </section>
    )
}

export default Board