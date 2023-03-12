import { useState } from "react"
import "./component3.css"

function ChangeName(){
        
    const [name, setName] = useState("Amit")

    function ChangeName() {
            setName(name === "Amit" ? "Rajan":"Amit")
    }
    return (
        <div className="changeName">  
        <p>{`My name is ${name}`}</p>
        <button onClick={ChangeName} className = "btn3">Change Name</button>
        </div>  
    )
}

export default ChangeName;