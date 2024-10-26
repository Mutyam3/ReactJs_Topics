import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Main/Home/Home';
import Matches from './Components/Main/Matches/Matches';
import ScoreBoard from './Components/Main/ScoreBoard/ScoreBoard';
import AboutUs from './Components/Main/AboutUs/AboutUs';
import ContactUs from './Components/Main/ContactUs/ContactUs';
import Teams from './Components/Main/Teams/Teams';
import CreateMatch from './Components/Main/Matches/CreateMatch';
import SelectSquad from './Components/Main/Matches/SelectSquad';
import MyGames from './Components/Main/Matches/MyGames';
import AddPlayer from './Components/Main/Matches/AddPlayer';




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
                        path : '/matches/createMatch',
                        element : <CreateMatch/>
                    },
                    {
                        path : '/matches',
                        element: <CreateMatch/>
                    },
                    {
                        path : '/matches/selectSquad',
                        element : <SelectSquad/>
                    },
                    {
                      path : '/matches/addPlayer',
                      element : <AddPlayer/>
                    },
                    {
                         path : '/matches/myGames',
                         element : <MyGames/>
                    }]
      },
      {
         path : '/score-board',
         element : <ScoreBoard/>
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
