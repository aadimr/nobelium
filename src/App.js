import './App.css';
import ChangeTextColor from './components/changeColor';
import { changeColorAtom } from './RecoilStorage';
import { useRecoilState } from 'recoil';

function App() {

const [color,setColor] = useRecoilState(changeColorAtom)

function handleClick(){
  setColor(!color)
}

  return (
    <div className="App">
    <ChangeTextColor/>
    <button onClick={handleClick}>changeColor</button>
    </div>
  );
}

export default App;
