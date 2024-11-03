import React from 'react'
import { useGetAllTodoListsQuery, useLazyGetAllTodoListsQuery } from '../../services/boardApi'
import { Link } from 'react-router-dom'

function Sidebar()
{

    const {isLoading, data}           =    useGetAllTodoListsQuery()
    const [rqFn]  = useLazyGetAllTodoListsQuery()

    React.useEffect(()=>{

               rqFn()
    }, [])

    return (
        <section className='text-light'>

                     {isLoading && <b>Loading....</b>}

                     <h4>Todolists</h4>

                     {
                        !isLoading && (
                            <ul>
                                {
                                    data.map((el)=>{
                                        return <Link to={`/todolist/${el.id}`}><li><button className='btn btn-primary m-2'>{el.title}</button></li></Link>
                                    })
                                }
                            </ul>
                        )
                     }
        </section>
    )
}

export default Sidebar