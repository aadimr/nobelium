// import logo from './logo.svg';
import './App.css';
import Heading from './component/component1';
import Input from './component/component2';
import Btn from './component/component3';


function App() {
  const headingText = "Register here..."
  const butonText = "Submit"
  return (
      <div className="App">
      <header className="App-header">
        
        <Heading headingText = {headingText}/>
        {Input()}
        <Btn butonText = {butonText}/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
