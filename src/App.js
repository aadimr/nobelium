import './App.css';
import { useState } from "react"
import SignupForm from './component/component1';
import SigninForm from './component/component2';

function App() {

  const [form, setForm] = useState("singin")
  function changeForm(formName){
    setForm(formName)
  }

  return (
   <>
   {
   form === "singin" ? <SigninForm changeForm = {changeForm}/>:<SignupForm/>
   }
   </>
  );
}

export default App;
