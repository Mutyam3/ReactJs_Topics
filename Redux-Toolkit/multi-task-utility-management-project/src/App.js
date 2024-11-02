import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
            <h3>Mutyam App</h3>


          <div className='m-4 p-2 border border-dark'>
                <Outlet/>
          </div>

    </div>
  );
}

export default App;
