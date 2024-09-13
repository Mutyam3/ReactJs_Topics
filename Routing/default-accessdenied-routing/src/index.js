import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutsUs';
import Service from './Service';
import ContactUs from './ContactUs';
import Products from './Products';
import Mobile from './Mobile';
import Ac from './Ac'
import Laptop from './Laptop'



const root = ReactDOM.createRoot(document.getElementById('root'));

const myRouter = createBrowserRouter(
                    [
                      {
                        path : '/',
                        element : <App/>,
                        children :[
                          {
                            path : '/',
                            element : <Home></Home>
                          },
                          {
                            path:'/home',
                            element : <Home></Home>
                          },
                          {
                            path : '/aboutus',
                            element : <AboutUs></AboutUs>
                          }
                          ,{
                            path : '/service',
                            element : <Service></Service>,
                            children : [
                                  {
                                      path : '/service/consultation',
                                      element : <Laptop></Laptop>
                                  },
                                  {
                                      path : '/service/training',
                                      element : <Mobile></Mobile>
                                  },
                                  {
                                      path : '/service/seo-and-digital-marketing',
                                      element : <Ac></Ac>

                                  }]
                          },
                          {
                            path : '/contactUs',
                            element : <ContactUs></ContactUs>
                          },
                          {
                            path : '/products',
                            element : <Products ></Products >,
                            
                          },
                          {
                            path : '/mobile',
                            element: <Mobile></Mobile>
                          },
                          {
                            path : '/laptop',
                            element : <Laptop></Laptop>
                          },
                          {
                             path : '/Ac',
                             element : <Ac></Ac>
                          }
                        ]
                      }
                      
                      

                   
                     ])
root.render(
  
   <RouterProvider router = {myRouter}></RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
