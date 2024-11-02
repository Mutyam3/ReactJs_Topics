import React from 'react'
import { useGetAllTodoListsQuery } from '../../services/boardApi'
import BoardCards from './BoardCards'


function BoardMaster()
{


    const {isLoading, data} =  useGetAllTodoListsQuery()

    console.log(data)


    return (
        <section>

                {
                        isLoading && <b>Loading ......</b>
                }

                 <div className='d-flex'> 
                  {
                        !isLoading && data?.map((todolist)=>{
                        return <BoardCards  todolist={todolist}></BoardCards>
                   })
                   }
                 </div>
        </section>
    )
}

export default BoardMaster