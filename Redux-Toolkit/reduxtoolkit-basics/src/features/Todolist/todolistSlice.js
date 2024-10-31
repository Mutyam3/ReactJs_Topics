import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    newTodo : '',
    todos : []
}

export const todolistSlice = createSlice(
    {
        name : 'todolist',
        initialState,

        reducers : {
             
            newTodoFn : (state, action)=>{
                 
                state.newTodo = action.payload
                 
            },

            addTodo : (state, action)=>{

                  state.todos.push(state.newTodo)

            },



        }
    }
)


export const {newTodoFn, addTodo} = todolistSlice.actions

const todolistReducer = todolistSlice.reducer 

export default todolistReducer