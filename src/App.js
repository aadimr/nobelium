import './App.css';
import Input from './components/component1';
import Count from './components/component2';
import ChangeName from './components/component3';

function App() {
  return (
   <>
   <div className='container'>
   <Input/>
   </div>
   <div className='container1'>
   <Count/>
   </div>
   <div className='container'>
   <ChangeName/>
   </div>
   </>
  );
}

export default App;
