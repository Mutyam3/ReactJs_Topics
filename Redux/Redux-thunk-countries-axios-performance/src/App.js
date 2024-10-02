import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store';
import Counter from './Components/Counter';
import Todolist from './Components/Todolist';
import Countries from './Components/Countries';

function App() {
  return (
    <div className="App">
     
    <Provider store = {store}>

      <h1>Mutyam </h1>
      <Countries></Countries>
      <Counter></Counter>
      <Todolist></Todolist>
    </Provider>

    </div>
  );
}

export default App;
