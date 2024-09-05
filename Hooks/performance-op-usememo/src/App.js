import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {


    const [x, setX] = React.useState('')
    const [a, setA] = React.useState(10)
    const [b, setB] = React.useState(20)


   function inpx(e)
   {
        setX(+e.target.value)
   }

   function inpa(e)
   {
       setA(+e.target.value)
   }

   function inpb(e)
   {
     setB(+e.target.value)
   }


   var add = React.useMemo (()=>
                {
                  console.log("namaste anna")
                   return sum(a,b)
                   
                } ,[a,b]) // a state or b state lo update aithene ee function return chestadi ledante old sum eh untadi 

        // ikkada use Memo vala manaki a aina b lo aina changes vastene 
        //ee add ane function call aithadi dantlo unna sum function call aithadi 
        // so ikkada useMemo function return value ni memorize chesukuntadi 
         // okavela empty dependency array pedithe first time render ayyetapude function 
         // return lo unna value eh untadi setupdate aina change avvadu ade a,b pedithe 
         // a state update aina b state update aina prathisari kotha values ni add chesi print 
         // chestadi

        function sum(y,z)
        {
             console.log("hi babu")
            return y + z
        }


  return (
    <div className="App">
          <h1>Mutyam - App</h1>
          <label>x value : <input type="text" onKeyUp ={inpx}/></label><br/>
          <label>a value : <input type="text" onKeyUp = {inpa}/></label><br/>
          <label>b value : <input type="text" onKeyUp = {inpb}/></label><br/>
          <h3>{x}</h3>
          <h3>{add}</h3>
    </div>
  );
}

export default App;
