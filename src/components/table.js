import { useState } from "react"
import style from "./table.module.css"

function Table(){

const [number, setNumber] = useState(0)
const [updateNumber, setUpdateNumber] = useState([])

function handleClick(){
    let rendomNumber = Math.floor(Math.random()*49) + 1
    setNumber(rendomNumber)
    const table = []
    for(let i = 1; i <= 10; i++){
        table.push(`${rendomNumber} * ${i} = ${rendomNumber*i}` )
    } 
    setUpdateNumber(table)
} 

    return(
        <div className={style.container}>
        <button onClick={handleClick} className={style.btn}>Get random value</button>
        <h2>Number: {number}</h2>
        <ul className={style.ul}>
            {updateNumber.map((val, index) => {
                return <li key={index}>{val}</li>
            })}
        </ul>
        </div>
    )
}


export default Table;