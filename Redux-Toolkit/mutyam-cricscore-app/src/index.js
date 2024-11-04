import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { store } from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Home from './features/Body/Home/Home';
import Matches from './features/Body/Matches/Matches';
import Players from './features/Body/Players/Players';
import Teams from './features/Body/Teams/Teams';
import Products from './features/Body/Products/Products';
import MatchDashboard from './features/Body/Matches/MatchDashboard';
import CreateMatch from './features/Body/Matches/CreateMatch';


const myRouter = createBrowserRouter([
                  {
                    path : '/',
                    element : <App/>,
                    children : [
                       {
                          path : '/home',
                          element : <Home/>
                       },
                       {
                          path : '/',
                          element : <Home/>
                       },
                       {
                          path : '/matches',
                          element : <Matches/>,
                          children : [{
                              path : '/matches/matches-dashboard',
                              element : <MatchDashboard/>
                          },
                          {
                              path : '/matches',
                              element : <MatchDashboard/>
                          },
                          {
                             path : '/matches/create-match',
                             element: <CreateMatch/>
                          },
                          ]
                       },
                       {
                          path : '/players',
                          element : <Players/>
                       },
                       {
                         path : '/teams',
                         element : <Teams/>
                       },
                       {
                        path : '/products',
                        element : <Products/>
                       }
                    ]
                  }, 

                 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
            <RouterProvider router={myRouter}>

            </RouterProvider>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
