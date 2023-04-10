import { useState } from "react"
import style from "./table.module.css"

function Table() {

    const [time, setTime] = useState([])

    function handleOver(event) {
        const dateTime = new Date().toLocaleString()
        setTime([...time,{ overTime: dateTime, eventName: "in",  headingName: event.target.innerText,}])
    }

    function handleOut(event) {
        const dateTime = new Date().toLocaleString()
        setTime([...time,{ overTime: dateTime, eventName: "out",  headingName: event.target.innerText,}])
    }

    return (
        <div className={style.container}>
            <div className={style.headingContainer}>
                <h2 onMouseEnter={handleOver} onMouseLeave={handleOut} className={style.headings}>Heading 1</h2>
                <h2 onMouseEnter={handleOver} onMouseLeave={handleOut} className={style.headings}>Heading 2</h2>
                <div onMouseEnter={handleOver} onMouseLeave={handleOut} className={style.headings}>Hello I am a div</div>
            </div>
            <table>
                <tr className={style.tableHeader}>
                    <th>Time</th>
                    <th style={{backgroundColor:"lightGray"}}>Event name</th>
                    <th style={{backgroundColor: "rgb(165, 178, 236)"}}>Heading name</th>
                </tr>
                {time.map((ele, index) => {
                 return   <tr key={index} className={style.tableData}>
                        <td>{ele.overTime}</td>
                        <td style={{backgroundColor:"lightGray"}}>{ele.eventName}</td>
                        <td style={{backgroundColor: "rgb(165, 178, 236)"}}>{ele.headingName}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Table;