import { useState } from "react"
import "./component1.css"

function Input() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function inputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    setTasks([...tasks,newTask]);
  }

  return (
    <div className="addList">
      <div>
        <input type="text" value={newTask} onChange={inputChange}/>
        <button onClick={addTask} className = "btn">Add</button>
      </div>
        {tasks.map((task, index) => (
          <ul className="ul">
          <li key={index}>{task}</li>
          </ul>
        ))}
    </div>
  );
}

export default Input;
