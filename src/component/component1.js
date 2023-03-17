import{ useState } from "react"
import "./component1.css"

function TextArea() {

    const [count, setCount] = useState("")

    function countAlf(val){
        let countLengthVal = val.target.value
        if(countLengthVal.replace(/\s/g, "").length === 101){
            console.log(countLengthVal.length)
            alert("Limit exceed")
            return
        }
        setCount(countLengthVal)
    }

    return (
        <div className="limitedTextArea">
            <p for="story">Write somthing:</p>
            <textarea value={count} onChange = {countAlf} className = "textArea"/>
        </div>
    )
}

export default TextArea;