import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs';
import StudentForm from './components/Student Form';
import ContactUs from './components/ContactUs';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.json"
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import OtherDetails from './components/OtherDetails/OtherDetails';
import EducatQualification from './components/EducationalQualification/EducationalQualifications';
import UploadProfileDoc from './components/UploadDoc.jsx/UploadProfileDoc';
import Preview from './components/Preview';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter(
  [
    {
       path : '/',
       element : <App/>,
       children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/home',
          element : <Home/>
        },
        {
          path : '/aboutus',
          element : <AboutUs/>
        },
        {
          path : '/studentForm',
          element : <StudentForm/>,
          children : [{
               path : '/studentForm/personal-Details',
               element : <PersonalDetails/>
          },
          {
            path : '/studentForm',
            element : <PersonalDetails/>
          },
          {
              path : '/studentForm/Other-Details',
              element : <OtherDetails/>

          },
          {
            path : '/studentForm/Educational-Qualification',
            element : <EducatQualification/>
         },
         {
             path : '/studentForm/Upload-Profile-Documents',
             element : <UploadProfileDoc/>
         },
        {
          path : '/studentForm/Preview',
          element : <Preview/>
        }]
        },
        {
          path : '/contactus',
          element : <ContactUs/>
        }
       ]
    },
    
    
  ]
)

root.render(
    <RouterProvider router= {myRouter}>

        <App />

    </RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
