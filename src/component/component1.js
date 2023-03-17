import React, { useState } from 'react';
import "./component.css"

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function handleSubmit(val){
    val.preventDefault();
  };

  return (
    <div className='singupBackground'>
    <form onSubmit={handleSubmit} className = "signupForm">
      <label>
        <p>First Name:</p>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        <p>Last Name:</p>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>

      <label>
        <p>Email:</p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password:</p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
      <button type="submit" className='btn'>Sign Up</button>
      </div>
    </form>
    </div>
  );
}

export default SignupForm;