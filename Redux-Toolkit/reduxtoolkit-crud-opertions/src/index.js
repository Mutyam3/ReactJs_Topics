import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todolist from './features/Todolist/Todolist';
import Products from './features/Products/Products';
import EditProducts from './features/Products/EditProducts';

const myRouter =  createBrowserRouter([
                    {

                         path : '/',
                         element : <App/>,
                         children : [
                          {
                            path : '/todolist',
                            element: <Todolist/>
                          },

                          {
                            path : '/products',
                            element : <Products/>
                          },

                          {
                            path : '/editProducts/:pid',
                            element : <EditProducts/>
                          }
                         ]

                    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store = {store}>
   
        <RouterProvider router={myRouter}>

        </RouterProvider>

  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
