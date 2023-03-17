import { useState } from "react"
import "./component1.css"

function Input(){
    const [counts,setCount] = useState(0)
    const [currState,setState] = useState([])
    const [val,setVal] = useState("")

    const handleSetVal = (event) => {
          setVal(event.target.value)
    } 

    const addSetVal = () =>{
        if (val.trim() !== '') {
        setState([...currState,{ text: val, completed: false }])
        setVal("")
        setCount(counts + 1)
    }
}


    const handleCompleteTodo = (index) => {
        const newTodos = [...currState];
        newTodos[index].completed = true;
        setState(newTodos);
        setCount(currState.filter((task) => !task.completed).length)
      };

      function deleteItem(index){
        let list = [...currState]
        list.splice(index,1)
        setState(list)
        setCount(currState.filter((task) => !task.completed).length)
    }   
    

    const styleText = {
        "text-decoration": "line-through red"
    }
    return(
        <div className="todoList">
         <h2>Pending Tasks ({currState.filter((task) => !task.completed).length})</h2>
        {currState.map((task,index) => 
        <ul className = "ul">
        <li key={index} style={task.completed ? styleText : {}}>{task.text}</li>
        <div className="button">
        <button onClick={() => handleCompleteTodo(index)} className = "btn1">Complate</button>
        <button onClick={() => deleteItem(index)} className = "btn2">X</button>
        </div>
        </ul>
        )}
        <div className="inputButton">
        <input type="text" value={val} onChange = {handleSetVal} placeholder = "Add a new task" className="inputArea"/>
        <button onClick={addSetVal} className = "btn3">Add todo</button>
        </div>
        </div>
    )
}

export default Input;