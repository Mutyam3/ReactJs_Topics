import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">

        <h1>Mutyam App</h1>
       
        <Header></Header>

        <Outlet></Outlet>

        <Footer/>

        <div className='FooterEnd'>
               <b>© All Rights Reserved - Mutyam Bhargav Reddy</b>
        </div>

    </div>
  );
}

export default App;
