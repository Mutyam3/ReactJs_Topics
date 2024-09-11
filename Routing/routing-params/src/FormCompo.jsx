import React from 'react'
import YourForm from './YourForm'

function MyForm()
{
    // const [inp1, setInp1] = React.useState('')
    // const [inp2, setInp2] = React.useState('')

    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()


    React.useEffect(()=>{

        ref1.current.focus()

    },[])
   
     
    function handleInp1(e)
    {
        if(e.key == 'Enter')
            {
                ref2.current.focus()
            }  
    }

    function handleInp2(e)
    {
        if(e.key == 'Enter')
            {
                ref3.current.focus()
            }
    }
 
    return (
        <div className="App">
                <h1>My Form</h1>
            <label> FirstName :<input type="text" ref={ref1} onKeyUp={handleInp1}/></label><br/><br/>
           
            <label>LastName : <input type="text" ref={ref2} onKeyUp={handleInp2}/></label>
            

            <YourForm ref={ref3}></YourForm>

        </div>
    )
}

export default MyForm 