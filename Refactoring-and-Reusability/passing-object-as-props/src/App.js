import logo from './logo.svg';
import './App.css';
import Main from './MainCompo';
import cricket from './Data';

function App() {
  return (
    <div className="AppBox">
          
          <h1>Mutyam Bhargav Reddy</h1>
          {
              cricket.map((el)=>{
                  return <Main x = {el.players} y = {el.team}></Main>
              }
               )
          }
    </div>
  );
}

export default App;
