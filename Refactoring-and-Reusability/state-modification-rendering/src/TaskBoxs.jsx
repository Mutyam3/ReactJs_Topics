import React from 'react'
import Dis from './Display'

function TaskBox()
{

      const boxOne = ["task1", "task2", "task3"]
      const boxTwo = ["task4", "task5", "task6"]

      const [listOne, setListOne] = React.useState([...boxOne])
      const [listTwo, setListTwo] = React.useState([...boxTwo])


      function removeListOne(indx)
      {
            var temp = [...listOne]
            var delItem = temp.splice(indx,1)
                   setListOne([...temp])
                   setListTwo([...listTwo, ...delItem])
      }

      function removeListTwo(indx)
      {
            var temp = [...listTwo]
            var delItem = temp.splice(indx,1)
                   setListTwo([...temp]) // delete chesina tarvatha array lo unna elements ni display cheyaniki 
                   setListOne([...listOne, ...delItem]) // delete chesina element ni vere array lo update cheyaniki 
      }


      return (
        <div>
               <Dis list1 = {listOne} list2 ={listTwo} removeOne={removeListOne} removeTwo={removeListTwo}></Dis>
        </div>
      )
}

export default TaskBox