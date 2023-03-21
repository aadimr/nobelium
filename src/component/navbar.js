import style from "./navbar.module.css"


function Navbar(props){


    return(
        <div className = {style.container}>
        <div className = {style.list}>
        <p className = "text">onClick</p>
        <p style = {{color:"gray", fontWeight:"Bold"}} className = "text">|</p>
        <ul className = {style.UL}>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
        </div>
        <div className = {style.buttons}>
        <button className = {style.btn3}>{props.btn1}</button>
        <button className = {style.btn4}>{props.btn2}</button>
        </div>
        </div>
    )
}

export default Navbar;