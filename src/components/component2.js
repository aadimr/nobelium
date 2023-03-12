import { useState } from "react"
import "./component2.css"

function Count() {
    const [Counts, setData] = useState(0)

    function handleClickButtonIncrease() {
        setData(Counts + 1)
    }
    function handleClickButtonDecrease() {
        if(Counts === 0){
            return;
        }
        setData(Counts - 1)
    }
    return (
        <div className="incDecrCount">
            <p>{Counts}</p>
            <div>
            <button  onClick={handleClickButtonIncrease} className = "btn1">Increse Count</button>
            <button  onClick={handleClickButtonDecrease} className = "btn2">Decrese Count</button>
            </div>
        </div>
    )
}

export default Count;