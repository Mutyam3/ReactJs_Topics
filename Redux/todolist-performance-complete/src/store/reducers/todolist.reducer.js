import {v4 as uuidv4} from 'uuid'

const initialState = {
    todos : [
              { title : 'payBills',
                status : false,
                id : uuidv4()
              }, 

              { title :'book tickets',
                status : false,
                id : uuidv4()
              }, 
              {
                title : 'medicine',
                status : true,
                id : uuidv4()
              },

              { title :'pay Current-Bill',
                status : false,
                id:uuidv4()
              },
              {
                title : 'bus fee',
                status : false,
                id : uuidv4()
              },
              {
                title : 'College fee',
                status : true,
                id : uuidv4()
              }
            ],

    newTodo : {title: '', status : false, id:''},
   

}

function todolistReducer(state = initialState, action)
{           
       
    
       if(action.type === 'UPDATENEWTODO')
       {
            return {...state, newTodo : {...state.newTodo, title : action.newTodoValue , id : uuidv4()}}
       }

       if(action.type === 'ADDTODO')
       {
            return {...state, todos : [...state.todos, {...state.newTodo}]}
       }


       if(action.type == 'DELETE')
       {
            //   var temp = [...state.todos]
            //       temp.splice(action.indx,1)
            // return {...state, todos : [...temp]}

            var temp = [...state.todos]
               temp = temp.filter((el)=>{
                      if(el.id == action.indx)
                      {
                           return false 
                      }
                      else 
                      {
                           return true
                      }
                })

                return {...state, todos: [...temp]}
       }

       if(action.type == 'DONE')
       {
             var temp = [...state.todos]
              
            //indx aithe ==>  temp[action.indx].status = false ila rasukovochu ade object
            // lo unna property base chesukoni inko property ni modify cheyali ante 
            // manam map ni use cheyochu 

            temp = temp.map((el)=>{
                   if(el.id == action.indx)
                   {
                        el.status = true //!el.status  ==> true unte false | false unte true
                        return el
                   }
                   else 
                   {
                        return el
                   }
                 
            })
             return {...state, todos: [...temp]}
       }

       if(action.type == 'UNDO')
       {
             var temp = [...state.todos]
             
             temp = temp.map((el)=>{
              if(el.id == action.indx)
              {
                   el.status = !el.status  //==> true unte false | false unte true
                   return el
              }
              else 
              {
                   return el
              }
            
       })
        return {...state, todos: [...temp]}
       }

       return {...state}


}

export default todolistReducer











// if(action.type === 'HANDLEFILTERDATA')
//   {
            
//          if(action.filterValue === 'all')
//           {  
//              var temp = [...state.todos] 
//              return {...state, filterTodoList : [...temp]} 
//           }

//          if(action.filterValue  === 'completed')
//           {
//                   var temp = [...state.todos]  
//                     temp = temp.filter((el)=>{
//                             if(el.status == true)
//                             {
//                                  return true
//                             }
//                             else 
//                             {   
                            
//                                 return false  
//                             }

//                      })
//                   console.log([...temp])
               

//                  return {...state, filterTodoList : [...temp]}
//           }

//          if(action.filterValue  === 'notCompleted')
//           {
//                    var temp = [...state.todos] 
//                    temp = temp.filter((el)=>{
//                               if(el.status == false)
//                                {
//                                   return true
//                                }
//                                else 
//                                {   
                                 
//                                  return false  
//                                }

//                         })
                    
//                return {...state, filterTodoList : [...temp]}
//           }
//   }