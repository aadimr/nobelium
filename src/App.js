// import logo from './logo.svg';
import './App.css';
import firstComponent from './component1';
import secondComponent from './component2';
import thirdComponent from './component3';
import button from './button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{firstComponent()}</h1>
        <h2>{secondComponent()}</h2>
        <h3>{thirdComponent()}</h3>
        {button()}
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
