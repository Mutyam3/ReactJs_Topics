import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <h1>Mutyam - Routing</h1>

           <ul>
              <li><Link to = "/home">Home</Link></li>
              <li><Link to="/aboutus">AboutUs</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/contactus">ContactsUs</Link></li>
              <li><Link to="/products">Products</Link></li>
           </ul>

           <Outlet></Outlet>
    </div>
  );
}

export default App;
