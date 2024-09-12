import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Countries from './Countries';
import AllCountries from './AllCountries';
import CountriesList from './CountriesList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myRouter = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children : [
      {
          path : '/countries',
          element : <Countries></Countries>,

          children : [
            {
               path: '/countries/countriesGrid',
               element : <AllCountries></AllCountries>
            },
            {
                 path : '/countries/countriesList',
                 element : <CountriesList></CountriesList>
            },
            {
              path: '/countries',
              element : <AllCountries></AllCountries>
            }
          ]
      },
      
    
      
    ]
  }

])

root.render(

   <RouterProvider router={myRouter}></RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
