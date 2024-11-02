import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App m-5 ">
   
            <h3>Mutyam App</h3>


          <div className='m-4 p-2 '>
                <Outlet/>
          </div>

    </div>
  );
}

export default App;
