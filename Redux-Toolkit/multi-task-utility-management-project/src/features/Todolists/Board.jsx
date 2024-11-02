import React from 'react'
import { useGetAllTodoListsQuery } from '../../services/boardApi'

import { Outlet } from 'react-router-dom'
import BoardMaster from './BoardMaster'

function Board()
{

   


    return (
        <section>
         
                <h3>Board</h3>

              <Outlet/>
            

        </section>
    )
}

export default Board