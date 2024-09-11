import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from 'react-router-dom'




function App() {
  return (
    <div className="App">
         <h1>Mutyam - Routing</h1>

         <ul> 
          <li><Link to="./Todolist">Todolist</Link></li>
          <li><Link to="./MyForm">MyForm</Link></li>
          <li><Link to="./Countries">Countries</Link></li>
         </ul>

         <Outlet></Outlet>
    </div>
  );
}

export default App;
