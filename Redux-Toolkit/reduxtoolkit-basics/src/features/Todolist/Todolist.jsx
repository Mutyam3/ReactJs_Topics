import React from 'react'
import { addTodo, newTodoFn } from './todolistSlice'
import { useSelector, useDispatch } from 'react-redux'
import { filterTododoFn } from './todolistSlice'
import { filterKeyFn } from './todolistSlice'
import { deleteFn } from './todolistSlice'
import { doneFn } from './todolistSlice'
import { undoFn } from './todolistSlice'


function Todolist()
{

        const {filterTodos, todos, filterKey}  =  useSelector(state=>state.todolist)
        console.log(filterTodos)
        const dispatch = useDispatch()

        React.useEffect(()=>{

             dispatch(filterTododoFn())

        }, [todos, filterKey])
       

        function done()
        {

        }





    return (
        <section>
             <h1>Todolist</h1>
               {console.log(`${'mutyam'}${1}`)}
             <input type='text' onChange = {(e)=>{dispatch(newTodoFn(e.target.value))}}/>
             <button onClick = {()=>{dispatch(addTodo())}}>Add Todo</button> <br/><br/>
             
             <input type='radio' value= 'All' name='filterTodos' onChange={(e)=>{dispatch(filterKeyFn(e.target.value))}}/>All
             <input type='radio' value= 'Completed' name='filterTodos' onChange={(e)=>{dispatch(filterKeyFn(e.target.value))}}/> Completed  
             <input type='radio' value= 'NotCompleted' name='filterTodos' onChange={(e)=>{dispatch(filterKeyFn(e.target.value))}}/> Not Completed

             <br/><br/>
            
                {
                   
                    filterTodos?.map((el, ind)=>{
                        return <li className='ListItems' style={el.status ? {backgroundColor : 'crimson'} : {backgroundColor : 'green'}} id={`${el.title}${ind}`}> <div>{el.title}</div>
                                {
                                el.status ?  
                                            <button onClick = {()=>{dispatch(undoFn(el.id))}}>Undo</button> :
                                            <button onClick = {()=>{dispatch(doneFn(el.id))}}>Done</button>
                                }
                                 <button onClick = {()=>{dispatch(deleteFn(el.id))}}>Delete</button>
                                </li>
                    })
                    
                }
             



        </section>
    )
}

export default Todolist