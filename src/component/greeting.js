import { useState } from "react"
import style from "./greeting.module.css"

function Greetings(){
 
let greetArr = ["Good Morning","Good night","Good Evening","Good Afternoon","Happy Birthday"]

  const [greetings,setGreetings] = useState(0)  
 
  function handleNewGreeting(){
    setGreetings((greetings + 1)%greetArr.length)
  }


    return(
        <div className={style.container}>
        <h2 className={style.changeGreeting}>{greetArr[greetings]}</h2>
        <button onClick={handleNewGreeting} className={style.btn}>click</button>
        </div>
    )
}

export default Greetings;