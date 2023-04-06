import './App.css';
import Home from './components/home';
import Navbar from './components/navBar';

function App() {

  const btn1 = "Home";
  const btn2 = "About Us"
  const btn3 = "Login" 

  return (
    <div className="App">
   <Navbar btn1 = {btn1} btn2 = {btn2} btn3 = {btn3}/>
   <Home/>
    </div>
  );
}

export default App;
