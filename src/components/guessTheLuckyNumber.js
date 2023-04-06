import { useState } from "react"
import style from "./guessTheLuckyNumber.module.css"

function GuessLuckyNumber(){

    const [luckyNumber,setLuckyNumber] = useState(Math.floor(Math.random() * 19) + 1)
    const [guessNumber,setGuessNumber] = useState("")
    const [countAttamp,setCountAttemt] = useState(0)
    
    function handleClick(){
        setCountAttemt(countAttamp + 1)
        if(+guessNumber > luckyNumber){
            alert("your guessed number is greater than the lucky number")
        }else if(+guessNumber < luckyNumber){
            alert("your guessed number is less than the lucky number")
        }else{
            alert(`Congratulations! you guessed the correect number in ${countAttamp + 1} attempts`)
            setLuckyNumber(Math.floor(Math.random() * 19) + 1)
            setCountAttemt(0)
        }
        setGuessNumber("")
    }

    return(
        <div>
            <h3>Guess the lucky Number</h3>
        <input value = {guessNumber} onChange = {(event) => setGuessNumber(event.target.value)} className = {style.inputArea}/>
        <button onClick = {handleClick} className = {style.btn}>Submit</button>
        </div>
    )
}

export default GuessLuckyNumber;