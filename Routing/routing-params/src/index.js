import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './FormCompo';
import Countries from './Countries';
import Todolist from './Todolist';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CountryDetails from './CountryDetails';


const myrouter = createBrowserRouter([
                     {
                         path : '/',
                         element : <App/>,
                         children: 
                              [
                              {
                                 path : '/MyForm',
                                 element: <MyForm></MyForm>
                              }, 
                              {
                                path : '/Todolist',
                                element : <Todolist></Todolist>
                              },
                              {
                                path : '/Countries',
                                element : <Countries></Countries>
                              }, 
                              {
                                path : "/countryDetails/:country",
                                element: <CountryDetails></CountryDetails>
                              }
                              ]
                     }
                    
                    ])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <RouterProvider router={myrouter}>
          
  </RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
