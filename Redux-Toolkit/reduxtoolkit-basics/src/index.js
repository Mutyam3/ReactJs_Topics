import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './app/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Counter from './features/Counter/Counter';
import Todolist from './features/Todolist/Todolist';
import ProductsList from './features/Products/ProductsList';
import Cart from './features/Products/Cart';

const myRouter = createBrowserRouter(
           [
                {
                    path : '/',
                    element:<App/>,
                    children : [
                      {
                         path : '/counter',
                         element : <Counter/>
                      },
                      {
                         path : '/todolist',
                         element : <Todolist/>
                      },
                      {
                        path : '/products',
                        element : <ProductsList/>
                      },
                      {
                         path : '/cart',
                         element:<Cart/>
                         
                      },
                      {
                        path : '/',
                        element : <Counter/>
                      }
                    ]

                },
               

           ]

     
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store= {store}>
  <RouterProvider router={myRouter}>

  </RouterProvider>
  </Provider>
  
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
