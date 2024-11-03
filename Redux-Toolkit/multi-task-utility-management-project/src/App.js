import logo from './logo.svg';
import './App.css';
import { Outlet , Link} from 'react-router-dom';

function App() {
  return (
    <div className="App m-2 ">
   
            <h3><Link to='/'>Mutyam App</Link></h3>


          <div className='m-2 p-2 '>
                <Outlet/>
          </div>

    </div>
  );
}

export default App;
