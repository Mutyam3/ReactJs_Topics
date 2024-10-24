import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <section className="App">
         <Header/>

         <div>
              <Outlet/>
         </div>

         <Footer/>
    </section>
  );
}

export default App;
