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
import CreateTeams from './features/Body/Teams/CreateTeams';
import TeamsDashboard from './features/Body/Teams/TeamsDashboard';
import PlayersDashboard from './features/Body/Players/PlayerDashboard';
import AddPlayer from './features/Body/Players/AddPlayers';
import MatchCenter from './features/Body/Matches/MatchCenter';
import SelectSquad from './features/Body/Matches/SelectSquad';
import ScoreCard from './features/Body/Matches/ScoreCard';
import Scoring from './features/Body/Matches/Scoring';

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
                          children : [
                           {
                              path : '/matches/matches-dashboard',
                              element : <MatchDashboard/>
                          },
                          {
                              path : '/matches',
                              element : <MatchDashboard/>
                          },
                          {
                             path : '/matches/create-match',
                             element: <CreateMatch/>,
                          },
                          {
                             path : '/matches/:id',
                             element : <MatchCenter/>,
                             children : [
                                        {
                                           path : '/matches/:id',
                                           element : <SelectSquad/>

                                        },
                                        {
                                          path : '/matches/:id/selectSquad',
                                          element : <SelectSquad/>

                                        },
                                     
                                        {
                                           path : '/matches/:id/scoring',
                                           element : <Scoring/>
                                        },
                                        {
                                           path : '/matches/:id/scoreCard',
                                           element : <ScoreCard/>
                                        }]
                          }
                          ]
                       },
                       {
                          path : '/players',
                          element : <Players/>,  
                          children : [{
                               path : '/players',
                               element : <PlayersDashboard/>
                            },

                            {
                              path : '/players/players-dashboard',
                              element : <PlayersDashboard/>
                            },
                            {
                             path : '/players/create-players',
                             element : <AddPlayer/>
                            }
                           ]
                       },
                       {
                         path : '/teams',
                         element : <Teams/>,
                         children : [
                                 {
                                    path : '/teams',
                                    element : <TeamsDashboard/>
                                 },
                                 {
                                    path : '/teams/teams-dashboard',
                                    element: <TeamsDashboard/>
                                 },
                                 {
                                    path : '/teams/create-teams',
                                    element : <CreateTeams/>
                                 }
                         ]
                       },
                       {
                        path : '/products',
                        element : <Products/>,
                      
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
