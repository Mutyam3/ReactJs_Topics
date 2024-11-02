import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const boardApi = createApi({
         reducerPath : 'boardApi',
         baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/board'}),
         endpoints: (builder)=>({
              getAllTodoLists : builder.query({
                   query : () => '/'

                   
              }),

              getTodoListById : builder.query(
                {
                    query : (id) =>  `/${id}`
                }
              ),

              addNewTask : builder.mutation({
                query : (todolist)=> ({

                    url : `/${todolist.id}`,
                    method : 'PUT',     // ikkada nenu add task ki kooda put method eh vaduthuna endhuku ante nested object laga undi 
                    body : todolist

                })
              }),

              addTodolist : builder.mutation({
                query : (newTodolist)=>({
                     
                     url: '/',
                     method : 'POST',
                     body : newTodolist

                })
              }),

              deleteTodolist : builder.mutation({
                   query : (id)=>({
                       
                          url:`/${id}`,
                          method : 'DELETE'
                   })
              })




         })
})


export const {useGetAllTodoListsQuery,
              useGetTodoListByIdQuery,
              useAddNewTaskMutation ,
              useLazyGetTodoListByIdQuery, 
              useAddTodolistMutation,
             useLazyGetAllTodoListsQuery,
              useDeleteTodolistMutation} = boardApi