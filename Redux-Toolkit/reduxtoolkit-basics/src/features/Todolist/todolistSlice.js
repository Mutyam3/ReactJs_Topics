import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const initialState = {
    newTodo : {title : '', status : false, id : ''},
    todos : [{title:'paybills', status: false, id : uuidv4()} ],
    filterTodos : [],
    filterKey : 'All'
    
}

export const todolistSlice = createSlice(
    {
        name : 'todolist',
        initialState,

        reducers : {
             
            newTodoFn : (state, action)=>{
                 
                state.newTodo = { title : action.payload, status : false, id: uuidv4()}
                 
            },

            addTodo : (state, action)=>{

                  state.todos = [...state.todos , {...state.newTodo}]
                  
            },

            filterTododoFn : (state, action)=>{

               

                if(state.filterKey == 'All')
                {
                    state.filterTodos = [...state.todos]
                }
                
                if(state.filterKey == 'Completed')
                {
                    var temp = [...state.todos]
                    temp = temp.filter((el)=>{
                            if(el.status == true)
                            {
                                return true 
                            }
                            else
                            {
                                return false
                            }
                        })

                    state.filterTodos = [...temp]

                }

                if(state.filterKey == 'NotCompleted')
                {
                    var temp = [...state.todos]
                    temp = temp.filter((el)=>{
                        if(el.status == false)
                        {
                            return true
                        }
                        else 
                        {
                            return false
                        }
                    })

                    state.filterTodos = [...temp]
                }
            },

            filterKeyFn : (state, action)=>{

                state.filterKey = action.payload
            },

            deleteFn : (state, action)=>{

                // var temp = [...state.todos]
                //     temp.splice(action.payload, 1)
                // state.todos = [...temp]

                var temp = [...state.todos]
                    temp = temp.filter((el)=>{
                        if(el.id == action.payload)
                        {
                            return false 
                        }
                        else 
                        {
                            return true
                        }
                    })

                    state.todos = [...temp]
            },

            undoFn : (state, action) => {

                var temp = [...state.todos]
                    
                   temp = temp.map((el)=>{
                        if(el.id == action.payload)
                        {
                            el.status = false 
                            return el 
                        }
                        else 
                        {
                            return el
                        }
                    })

                state.todos = [...temp]
            },

            doneFn : (state, action) => {

                var temp = [...state.todos]

                     temp = temp.map((el)=>{
                        if(el.id == action.payload)
                        {
                            el.status = true
                            return el
                        }
                        else 
                        {
                            return el
                        }
                     })

                state.todos = [...temp]
            }



        }
    }
)


export const {newTodoFn, addTodo, filterTododoFn, filterKeyFn, deleteFn, doneFn, undoFn} = todolistSlice.actions

const todolistReducer = todolistSlice.reducer 

export default todolistReducer