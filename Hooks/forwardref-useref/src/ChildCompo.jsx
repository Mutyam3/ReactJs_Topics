import React from 'react'


const Child = React.forwardRef((props, refers)=>{
    

        return (
          <div className='App'>
              <h1>Child Component</h1>
              <input type="text" ref ={refers} />
          </div>
        )
  

            })


export default Child
