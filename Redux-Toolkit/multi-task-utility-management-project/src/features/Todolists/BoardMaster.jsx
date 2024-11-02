import React from 'react'
import { useGetAllTodoListsQuery, useLazyGetAllTodoListsQuery } from '../../services/boardApi'
import BoardCards from './BoardCards'


function BoardMaster()
{


    const {isLoading, data} =  useGetAllTodoListsQuery()
     const [getAllTodolistFn]  = useLazyGetAllTodoListsQuery()

     React.useEffect(()=>{

        getAllTodolistFn()
        
     }, [])

    console.log(data)


    return (
        <section>

                {
                     isLoading && <b>Loading ......</b>
                }

                 <div className='d-flex flex-wrap'> 
                  {
                        !isLoading && data?.map((todolist, ind)=>{
                        return <BoardCards  key={ind} todolist={todolist}></BoardCards>
                   })
                   }
                 </div>
        </section>
    )
}

export default BoardMaster