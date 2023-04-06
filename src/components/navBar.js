import style from "./navbar.module.css"
import Button from "./button";
import { useNavigate } from "react-router-dom";


function Navbar(props){

const navigate = useNavigate()

const pageByKey = {
    "Home": "/",
    "AboutUs": "/AboutUs",
    "LogIn": "/LogIn",
    "Register": "/Register",
}

function redirect(key){
    const pathToRedirect = pageByKey[key]
    navigate(pathToRedirect)
}


    return(
        <div className = {style.container}>
        <div className = {style.list}>
        <p className = "text">onClick</p>
        <p style = {{color:"gray", fontWeight:"Bold"}} className = "text">|</p>
        <ul className = {style.UL}>
            <li><Button value = {props.btn1} onClick = {() => redirect("Home")}/></li>
            <li><Button value = {props.btn2} onClick = {() => redirect("AboutUs")}/></li>
        </ul>
        </div>
        <div className = {style.buttons}>
        <Button value = {props.btn3} style = {{border: "none", backgroundColor: "white", cursor: "pointer"}} onClick = {() => redirect("LogIn")}/>
        </div>
        </div>
    )
}

export default Navbar;