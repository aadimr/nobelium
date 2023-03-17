import { useState } from "react"
import "./component2.css"

function SigninForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (val) => {
      val.preventDefault();
    };
  
    return (
        <div className="singinBackground">
      <form onSubmit={handleSubmit} className = "signinForm">
        <label>
          <p className="text">Email:</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className = "inputFiled"/>
        </label>
        <label>
        <p className="text">Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className = "inputFiled"/>
        </label>
        <button type="submit" className="btn1">Sign In</button>
        <div className="clickButonChange">
        <p className="textToAsk">don't have any account?</p>
        <button className="singupbtn" onClick={() => props.changeForm("signupForm")}>SingUp</button>
        </div>
      </form>
      </div>
    );
  }

  export default SigninForm;