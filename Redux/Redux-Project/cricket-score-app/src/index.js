import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Main/Home/Home';
import Matches from './Components/Main/Matches/Matches';
import AboutUs from './Components/Main/AboutUs/AboutUs';
import ContactUs from './Components/Main/ContactUs/ContactUs';
import Teams from './Components/Main/Teams/Teams';
import CreateMatch from './Components/Main/Matches/CreateMatch';
import SelectSquad from './Components/Main/Matches/SelectSquad';
import MyGames from './Components/Main/Matches/MyGames';
import AddPlayer from './Components/Main/Matches/AddPlayer';
import CustomMatch from './Components/Main/Matches/Custom Match';




const root = ReactDOM.createRoot(document.getElementById('root'));

const myrouter = createBrowserRouter([
  {
     path : '/',
     element : <App/>,
     children : [
      {
          path : '/',
          element : <Home/>
      },
      {
         path : '/matches',
         element : <Matches/>,
         children : [
                    
                    {
                        path : '/matches',
                        element: <MyGames/>
                    },
                    {
                        path : '/matches/customMatch',
                        element : <CustomMatch/>,
                        children:[
                          {
                              path : '/matches/customMatch/selectSquad',
                              element : <SelectSquad/>
                          },
                          {
                             path : '/matches/customMatch/addPlayer',
                             element : <AddPlayer/>
                          },
                          {
                            path : '/matches/customMatch/createMatch',
                            element : <CreateMatch/>
                          },
                          {
                            path : '/matches/customMatch',
                            element : <CreateMatch/>
                          }
                          
                        ]
                    },
                     ,
                    {
                         path : '/matches/myGames',
                         element : <MyGames/>
                    }]
      },
      {
         path : '/match-centers',
         element : <Teams/>
      },
      {
         path : '/about-us',
         element : <AboutUs/>
      },
      {
        path : '/contact-us',
        element : <ContactUs/>
      }]
  },
  {
      
  }
  ])

root.render(

  <RouterProvider router = {myrouter}>
        <App />
  </RouterProvider>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
