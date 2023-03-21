import './App.css';
import Navbar from "./component/navbar";
import MainSection from './component/mainSection';
import HideNavBar from './component/hideNavbar'


function App() {
  let btn1 = "Login"
  let btn2 = "Sign Up"
  let btn3 = "Get Started"
  let btn4 = "How to use"

  

  return (
    <div className = "Header">
    <HideNavBar/>
    <Navbar btn1 = {btn1} btn2 = {btn2}/>
    <MainSection btn3 = {btn3} btn4 = {btn4} className = "stick"/>
    </div>
  );
}

export default App;
