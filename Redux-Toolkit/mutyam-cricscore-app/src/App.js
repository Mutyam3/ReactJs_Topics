import logo from './logo.svg';
import './App.css';
import Navbar from './features/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <section className="App">
      
         <Navbar/>

         <div>
             <Outlet/>
         </div>

         <Footer/>

    </section>
  );
}

export default App;
