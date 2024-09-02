import logo from './logo.svg';
import './App.css';
import First from './FirstCompo';
import MyContext from './MyContext';

function App() {

  const userDetails = {firstName: "Bhargav", 
                       lastName : "Mutyam", 
                       age : 25, 
                       gender:"Male",
                       profilePic : "https://freesvg.org/img/winkboy.png"}
  return (
    <MyContext.Provider  value = {userDetails}>
         <div className="Box">
            <h1>Passing personal data using context API</h1>
            <First></First>
         </div>
    </MyContext.Provider>
  );
}

export default App;
