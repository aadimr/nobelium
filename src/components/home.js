import style from "./home.module.css"
import img from "../image/VK.png"

function Home(){
    return (
        <div className = {style.section1}>
        <div className = {style.container}>
        <div className = {style.text}>
        <span className = {style.heading1}>Let's bring your team together in onclick</span>
        <span className = {style.heading2}>We help you to manage all of your work and daily task in office</span>
        </div>
        <div className = {style.btn}>
        </div>
        </div>
        <div className = {style.image}>
            <img src = {img} alt = "error"/>
        </div>
        </div>
    )
}

export default Home;