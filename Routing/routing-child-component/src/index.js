import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';
import Service from './Services';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import ServiceDetails from './ServiceDetails';



const myRouter = createBrowserRouter([
                  {
                       path: '/',
                       element: <App/>,

                       children: [
                         {
                            path:'/home',
                            element : <Home></Home>
                         },
                         {
                            path : '/aboutus',
                            element : <AboutUs></AboutUs>
                         },
                         {
                             path : '/contactus',
                             element : <ContactUs></ContactUs>
                         },
                         {
                              path : '/services',
                              element : <Service></Service>,
                              children : [
                                 {
                                    path : '/services/:s',
                                    element : <ServiceDetails></ServiceDetails>
                                 }
                              ]
                         },
                         {
                              path : '/countries',
                              element : <Countries></Countries>,
                              children : [
                                 {
                                     path : '/countries/country/:c',
                                     element : <CountryDetails></CountryDetails>
                                 }
                              ]
                         }
                       ]
                  }, 
                 ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <RouterProvider router={myRouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
