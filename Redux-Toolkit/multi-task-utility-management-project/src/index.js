import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Provider } from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { store } from './app/store';
import Board from './features/Todolists/Board';
import Todolist from './features/Todolists/Todolist';
import BoardMaster from './features/Todolists/BoardMaster';

const myRouter = createBrowserRouter([

                {
                    path : '/',
                    element : <App/>,
                    children : [
                        {
                           path : '/board',
                           element : <Board/>
                        },
                        {
                           path : '/',
                           element : <Board/>,
                           children : [
                            {
                               path : '/todolist/:id',
                               element : <Todolist/>
                            },
                            {
                               path : '/',
                               element : <BoardMaster/>
                            }
                           ]
                        }
                    ]
                }

]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider  store={store}>

        <RouterProvider  router={myRouter}></RouterProvider>
   
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
