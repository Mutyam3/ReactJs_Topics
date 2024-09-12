import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div style={{border:"2px solid black", margin:"7px", padding:'5px', backgroundColor:"grey"}}>
           <h2 style={{color:'white'}}><Link to='/countries'>Countries</Link></h2>
      </div>
        
         <Outlet></Outlet>
         
    </div>
  );
}

export default App;
