import logo from './logo.svg';
import './App.css';
import First from './FirstCompo';
import ManaContext from './MyContext';
import { userDetails } from './Data';
import React from 'react'
import Fourth from './FourthCompo';

function App() {

    const [val, setVal] = React.useState(420)
  return (
    <ManaContext.Provider value={userDetails}>
    <div className="App">
               
            <First v = {val}></First>
            <Fourth></Fourth>

          
    </div>
    </ManaContext.Provider>
  )
  
}


export default App;
