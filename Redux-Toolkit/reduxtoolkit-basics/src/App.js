import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter/Counter';
import Todolist from './features/Todolist/Todolist';




function App() {
  return (
    <div className="App">
        <h1>App</h1>

         <Counter/>
         <Todolist/>
    </div>
  );
}

export default App;
