import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Store from './store/store';
import {Provider} from 'react-redux'

function App() {


  return (
    <div className="App">
     <Provider store = {Store}>
        <Header></Header>

        <Outlet></Outlet>

        <Footer/>

        <div className='FooterEnd'>
               <b>© All Rights Reserved - Mutyam Bhargav Reddy</b>
        </div>
        </Provider>
    </div>
  );
}

export default App;
