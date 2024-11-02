
import logo from './logo.svg';
import './App.css';

// Akkada export chesinavi ani ikkada import cheyali

import Counter from './Counter'
import TodoList from './Todo'


// idi main component anni component lu ikkada ki vachi sastai 
// Gangarpanam.
// Mother component [anni ikkadanunche load avuthai]
// ee app.js file ni rename chestuna app.jsx laga endhuku raa ante closing tags vastai
// time waste processing closing tags rasukunta kurchunte
// ikkada jsx literal lo elements ki css add cheyali ante className ani ivvali class ani kadu

function App() {
  return (
    <div id="appBox">

          <h1>Mutyam - Counter and Todo App</h1>
          <Counter></Counter>
          <TodoList></TodoList>
    </div>
  );
}

export default App;
