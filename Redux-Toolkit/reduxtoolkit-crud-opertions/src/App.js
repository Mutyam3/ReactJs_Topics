import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar/Navbar';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
             <Navbar/>

             <Outlet/>
    </div>
  );
}

export default App;
