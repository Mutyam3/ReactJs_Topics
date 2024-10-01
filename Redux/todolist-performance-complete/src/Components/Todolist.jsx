import React from 'react'
import { connect } from 'react-redux'


function Todolist(props)
{
  
      const [filterTodos, setFilterTodos] = React.useState([])
      const [filterKey, setFilterKey] = React.useState('all')

      React.useEffect(()=>{},[]) 
      // idi okavela use cheste aa time ki mana deggara data undochu undokapovochu 
      //[ante redux nunchi data eppudaina ravochu ]so manam idi use cheyam
      React.useEffect(()=>{},[]) // idi aithe prathisari execute aithadi component rerender aina prathisari 

      React.useEffect(()=>{
           if(filterKey == 'all')
           {
               setFilterTodos([...props.todolistReducer.todos])
           }
           if(filterKey == 'completed')
           {
               var temp = props.todolistReducer.todos.filter((el)=>{
                           return el.status === true
               })
               setFilterTodos([...temp])
           }
           if(filterKey == 'notCompleted')
           {
                 var temp = props.todolistReducer.todos.filter((el)=>{
                              return el.status === false 
                 })

                 setFilterTodos([...temp])
           }
      },[props.todolistReducer.todos, , filterKey])
    
    
    return (
        <div className='App'>

            <h2>TODOLIST ({filterTodos.length})</h2>

            <input type="text" onChange={(e)=>{props.dispatch({type : 'UPDATENEWTODO' , newTodoValue : e.target.value})}} />
            <button onClick = {()=>{props.dispatch({type : 'ADDTODO'})}}>Add Task</button> <br/><br/>

            <input type="radio" name="filterTodo" value = "all" onChange = {(e)=>{setFilterKey(e.target.value)}}/> All 
            <input type="radio" name="filterTodo" value = "completed" onChange = {(e)=>{setFilterKey(e.target.value)}}/> Completed
            <input type="radio" name="filterTodo" value = "notCompleted" onChange = {(e)=>{setFilterKey(e.target.value)}}/> Not Completed 

              
            <ol>
               {
                    filterTodos && filterTodos.map((el)=>{
                        return (
                            <li className = {el.status ? 'doneClass' : 'undoClass'}>
                                {el.title}

                                {el.status ? <button onClick = {()=>{props.dispatch({type : 'UNDO', indx : el.id})}}>UNDO</button> :
                                             <button onClick = {()=>{props.dispatch({type : 'DONE', indx : el.id})}}>DONE</button> } 

                                <button onClick = {()=>{props.dispatch({type : 'DELETE', indx : el.id})}}>DELETE</button>
                            </li>
                        )
                     })
               }
            </ol>

        </div>
    )
}

export default connect((store)=>{
    return store
})(Todolist)


// ikkada index dwara naku problem aithundi undo done chestepadu problem aithundi so index dwara kakunda 
// manam prathi object ki oka unique id ni isthe problem undadu aa unique id base chesukone manam try 
// eh action aina chestam /modify chestam like undo done 


                        //   *****    Best Practice 1    ***** 
// 1. First Rule : Reducer lo em cheyakundadu ante if else for loop lu raakudadu ala ani ide correct ante  kadhu 
//    mari ekkada rayali ante action creators untai aa files lo rastam for example delete todo cheyali anukunte 
//    reducer lo rayam action creators lo rastam 


