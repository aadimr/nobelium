import img from "../image/VK.png"
import style from "./mainSection.module.css"

function MainSection(props){
    return(
        <div className = {style.section1}>
        <div className = {style.container}>
        <div className = {style.text}>
        <span className = {style.heading1}>Let's bring your team together in onclick</span>
        <span className = {style.heading2}>We help you to manage all of your work and daily task in office</span>
        </div>
        <div className = {style.btn}>
        <button className = {style.btn1}>{props.btn3}</button>
        <button className = {style.btn2}>{props.btn4}</button>
        </div>
        </div>
        <div className = {style.image}>
            <img src = {img} alt = "error"/>
        </div>
        </div>
    )
}

export default MainSection;