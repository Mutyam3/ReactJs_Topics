import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter/Counter';
import Todolist from './features/Todolist/Todolist';
import ProductsList from './features/Products/ProductsList';
import { useSelector } from 'react-redux';
import { store } from './app/store';
import { Provider } from 'react-redux';
import NavBar from './features/NavBar';
import { Outlet } from 'react-router-dom';



function App() {


   const {cartItems} = useSelector((state)=>state.products)

   console.log(cartItems)

  return (
   
         <div className="App">
         
         <NavBar/>
              
         <h1>cartItems : {cartItems?.length}</h1>

        <Outlet/>


         </div>


    
 
   
  );
}

export default App;
