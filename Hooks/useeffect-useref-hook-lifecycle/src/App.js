import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
import MyCompo from './MyCompo';
import Todolist from './Todolist';

function App() {
  return (
    <div className="App">
             
          <MyForm></MyForm>
          <MyCompo></MyCompo>
          <Todolist></Todolist>
    </div>
  );
}

export default App;
