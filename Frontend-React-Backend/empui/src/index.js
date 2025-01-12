import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouteProvider, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import EmployeeHome from './features/EmployeeHome';
import AddEmployee from './features/AddEmployee';

const router =  createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
       {
        path : '/',
        element : <EmployeeHome/>
       },
       {
        path : '/addEmployee',
        element : <AddEmployee/>
       }
    ]
  }

]
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Provider store = {store}>
         <RouterProvider router = {router}>

        </RouterProvider>
  </Provider>

   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
