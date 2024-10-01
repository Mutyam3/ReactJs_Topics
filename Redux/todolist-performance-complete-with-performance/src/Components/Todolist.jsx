import React from 'react'
import { connect } from 'react-redux'
import { addTodo, undoFn,doneFn, del, updateTodo } from '../store/reducers/actions'
import { selectTodos } from '../store/reducers/todolist.reducer'


function Todolist(props)
{
    console.log(props)

      const [filterTodos, setFilterTodos] = React.useState([])
      const [filterKey, setFilterKey] = React.useState('all')

      React.useEffect(()=>{},[]) 
      // idi okavela use cheste aa time ki mana deggara data undochu undokapovochu 
      //[ante redux nunchi data eppudaina ravochu ]so manam idi use cheyam
      React.useEffect(()=>{},[]) // idi aithe prathisari execute aithadi component rerender aina prathisari 

      React.useEffect(()=>{
       
           if(filterKey == 'all')
           {
               setFilterTodos([...props.todos])
           }
           if(filterKey == 'completed')
           {
               var temp = props.todos.filter((el)=>{
                           return el.status === true
               })
               setFilterTodos([...temp])
           }
           if(filterKey == 'notCompleted')
           {
                 var temp = props.todos.filter((el)=>{
                              return el.status === false 
                 })

                 setFilterTodos([...temp])
           }
      },[props.todos, , filterKey])
    
    
    return (
        <div className='App'>

            <h2>TODOLIST ({filterTodos.length})</h2>

            <input type="text" onChange={(e)=>{props.updateNewTodo(e.target.value)}} />
            <button onClick = {props.addTask}>Add Task</button> <br/><br/>

            <input type="radio" name="filterTodo" value = "all" onChange = {(e)=>{setFilterKey(e.target.value)}}/> All 
            <input type="radio" name="filterTodo" value = "completed" onChange = {(e)=>{setFilterKey(e.target.value)}}/> Completed
            <input type="radio" name="filterTodo" value = "notCompleted" onChange = {(e)=>{setFilterKey(e.target.value)}}/> Not Completed 

              
            <ol>
               {
                    filterTodos && filterTodos.map((el)=>{
                        return (
                            <li className = {el.status ? 'doneClass' : 'undoClass'}>
                                {el.title}

                                {el.status ? <button onClick = {()=>{props.undoTask(el.id)}}>UNDO</button> :
                                             <button onClick = {()=>{props.doneTask(el.id)}}>DONE</button> } 

                                <button onClick = {()=>{props.delTask(el.id)}}>DELETE</button>
                            </li>
                        )
                     })
               }
            </ol>

        </div>
    )
}

function mapStateToProps(state)
{
      return state.todolistReducer
}

function mapDispatchToProps(dispatch)
{
      return {
           updateNewTodo : (newTodo)=>{dispatch(updateTodo(newTodo))},
           addTask : ()=>{dispatch(addTodo())},
           undoTask : (id)=>{dispatch(undoFn(id))},
           doneTask : (id)=>{dispatch(doneFn(id))},
           delTask : (id)=>{dispatch(del(id))}
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist)


// ikkada index dwara naku problem aithundi undo done chestepadu problem aithundi so index dwara kakunda 
// manam prathi object ki oka unique id ni isthe problem undadu aa unique id base chesukone manam try 
// eh action aina chestam /modify chestam like undo done 


                        //   *****    Best Practice 1    ***** 
// 1. First Rule : Reducer lo em cheyakundadu ante if else for loop lu raakudadu ala ani ide correct ante  kadhu 
//    mari ekkada rayali ante action creators untai aa files lo rastam for example delete todo cheyali anukunte 
//    reducer lo rayam action creators lo rastam 
// enduku ee action lone rayali ante reason : 
//                       ==> manam emaina server calls cheyali anuko  (ante server nunchi call chesi data ni 
//                           techukovali techukoni vachina tarvtha pampiyali anuko  ippudu button ni click chesina 
//                           server ki call velli data vachina tarvatha reducer ki chepali 
//                           data vache varaku aa data vache code ekkada rastam component lo rayam 
//              *** Asynchronous calls meru ekkada chestaru Redux lo ante 
//                          action creators lo chestam not in components
//                    Main ga Asynchronous activity kosam action creators rasukuntam 
//                     


// store lo rendu untai okati counter marokati todolist kani counter ki todolist avasaram ledu ga 
// alagae todolist ki counter avasaram ledu ga so aa particular component ki aa particular data eh 
// povali store nunchi ante filter chesi pamapali aa respective component ki 
// for that we use map functions ==> here we required two functions one is for state and another is for dispatch 


// ila rasukotam vala component ki respective component data ne pass aithundi + 
// manam counter ni increment cheste todolist rerender avvatle endhuku ante 
// component eppudu rerender aithadi ==> either state change/update or dani props aina change avvali ee two cases lone component rerender aithadi 
// endhuku rerender avvatle ante because of mapStateToProps / mapDispatchToProps 
// dani valane endhuku avvi undatam vala em advnatage ante ==>

// manam counter ni increment chesinapudu props change aithadi ee props ekkada nunchi vastai component ki ante aa mapstate/mapdispatch dwara isthadi 
// return cheyagane istha props ki ante kadhu ee functions ni manam connect lo pass chesam so aa result vachinavi connect uh component ki props 
// ga velthadi 
// ippudu counter compo lo unna count inc click cheyagane redux store lo aa data update aindi 
// ah counter component ki signal velthadi and aa todolist component ki kooda signal velthadi 
// kani aa mapstate ichina datane props ki velthadi so aa todolist ki vachina props lo em changes avvavu 
// so paatha todos eh untai new todos paatha todos ki difference undadu same props eh untai kabbatti todolist component rerender avvadu 



