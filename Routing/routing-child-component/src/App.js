import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <div className="App">
    
            <ul>
              <li>
                <Link to="/home">
                Home</Link>
              </li>
              <li>
                 <Link to="/aboutus">Aboutus</Link>
              </li>

              <li>
                 <Link to="/services">Service</Link>
              </li>

              <li>
                 <Link to="/contactus">ContactUS</Link>
              </li>
                
              <li>
                   <Link to="/countries">Countries</Link>
              </li>
               
            </ul>


          <Outlet></Outlet>

          

    </div>
  );
}

export default App;
