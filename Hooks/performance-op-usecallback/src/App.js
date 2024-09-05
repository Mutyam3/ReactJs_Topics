import logo from './logo.svg';
import './App.css';
import Child from './ChildComponent';
import React from 'react';

function App() {

  
  const [a, setA] = React.useState('')
  
  function txt(e)
  {
      setA(e.target.value)
  }

   const greetFn = React.useCallback(()=>
   {
     alert("Namaste anna")

   }, [])

  //  ikkada nenu callback with empty dependency ane hook ni vadina dini vala 
  //  aa function definition reference ni memorize chesukoni same reference ne 
  //  child component ki pampisthadi dini valla props lo changes undavu 
   
      

  return (
    <div className="App">
         <h1>Mutyam App</h1>
         <label>
             <input type = "text" onKeyUp={txt}/>
         </label>
         <Child greet = {greetFn}></Child>
    </div>
  );
}

export default App;
