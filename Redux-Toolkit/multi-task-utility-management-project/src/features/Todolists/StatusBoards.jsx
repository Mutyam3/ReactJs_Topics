import React from 'react'
import { useAddNewTaskMutation } from '../../services/boardApi'


function StatusBoards({todolist , type})
{

         const [updateFn]  = useAddNewTaskMutation()

    function handleDragStart(e, tid)
    {
            e.dataTransfer.setData('abc', JSON.stringify({id:e.target.id, "tid": tid}) )
    }

    function handleDrop(e){

        var {id, tid} = JSON.parse(e.dataTransfer.getData('abc'))
           console.log(tid)
           console.log(todolist)
        var temp = JSON.parse(JSON.stringify(todolist))
        var todos = temp.todos.map((el)=>{
              if(el.id == tid){
                  el.status = type   
              }

              return el
             
        })

         temp.todos = todos

         updateFn(temp).then((res)=>{})


        if(e.target.tagName == 'LI')
        {
            e.target.parentElement.appendChild(document.getElementById(id))
        }
        else{

            e.target.appendChild(document.getElementById(id))
        }
          
    }



    return (
        <section className='border border-dark w-25 m-2'>
             
             <h3 className='border border-2 bg-primary text-center'>{type}</h3>
            
            <ul onDragOver={(e)=>{e.preventDefault()}} onDrop={(e)=>{handleDrop(e)}} className='h-100 p-0'>
              {
                 todolist && todolist.todos?.filter((el)=>el.status==type).map((el,i)=>{
                        return <li id={`${el.task}${i}`} draggable='true'  onDragStart={(e)=>{handleDragStart(e, el.id)}}  className='rounded p-2 border border-2  bg-success text-light text-center m-2 ' type='none'>{el.task}</li>
                  })

              }
            </ul>
              {/* { ikkada drag and drop cheyaniki manaki prathi list ki oka unique id kavali }
                   manaki two eventlisteners untai onDragStart  and onDrop so mana case lo onDragStart appudu manaki oka list item laga undi 
                   ade drop chesetapudu oka list ga untadi , ikkada main ga drag chesetapudu  aa target drop cheseteapudu kooda kavali 
                   so dani em kavali ante data transfer avasaram cheyaniki  
                   dragOver default nature enti ante akkada nunchi tesei gane malli ade chotaku velthadi
                   so dani stop cheyaniki event lo preventDefault() */}

        </section>
    )
}

export default StatusBoards