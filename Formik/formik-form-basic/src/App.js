import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import {Provider} from 'react-redux'
import { FormProvider } from './FormContext';

function App() {


  return (
    <div className="App">
     <FormProvider>
         <div className='manaHeader'>
              <h3>Mutyam Testing Agency</h3>
         </div>
        <Header></Header>
         
         <div className='OutletMania'>
             <Outlet></Outlet>
         </div>
        

        <Footer/>

        <div className='FooterEnd'>
               <b>© All Rights Reserved - Mutyam Bhargav Reddy</b>
        </div>

        </FormProvider>

    </div>
  );
}

export default App;
