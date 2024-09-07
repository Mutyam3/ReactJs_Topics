import React from 'react'
import YourForm from './YourForm';

function MyForm()
{

    const [inp1, setInp1] = React.useState('')
    const [inp2, setInp2] = React.useState('')
    // const [inp3, setInp3] = React.useState('')

    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();

         React.useEffect(()=>{
            
            ref1.current.focus()

         },[])

       function txt1(e)
       {
           setInp1(e.target.value)
           if(e.key=='Enter')
           {
               ref2.current.focus()
           }
       }

       function txt2(e)
       {
            setInp2(e.target.value)
            if(e.key == 'Enter')
            {
                ref3.current.focus()
            }
       }


    return (
        <div className='App'>
            <h1>MyForm - App</h1>
            <label>FirstName : <input type="text" onKeyUp = {txt1} ref={ref1}/></label><br/>
            <label>LastName : <input type="text" onKeyUp = {txt2} ref={ref2}/></label> <br/>
            <YourForm ref={ref3} ></YourForm>
        </div>
    )
}

export default MyForm 