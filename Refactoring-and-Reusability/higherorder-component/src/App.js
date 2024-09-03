import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React from 'react';
import H1Counter from './H1Counter';

function App() {
  return (
    <div className="App">
          <h1>Highorder Component</h1>
          <Counter></Counter>
          <H1Counter></H1Counter>
        
    </div>
  );
}

export default App;
