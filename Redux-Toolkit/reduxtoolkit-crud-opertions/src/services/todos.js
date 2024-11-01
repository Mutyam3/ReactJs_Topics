import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const todolistApi = createApi({

    name : 'todolistApi',

    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/todos'}),
    endpoints : (builder) =>({
        addTodo : builder.mutation(
            {
                query : (newTodo) => ({
                    url : '/',
                    method : 'POST',
                    body : newTodo
                })
            }
        ),
    })
})

export const  {useAddTodoMutation} = todolistApi