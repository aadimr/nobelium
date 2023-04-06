import style from "./login.module.css"
import Button from "./button";
import Navbar from './navBar';
import { HiOutlineLockClosed } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LogIn() {

    const btn1 = "Home";
    const btn2 = "About Us"
    const btn3 = "Login" 
    const btn4 = "Register"


    const navigate = useNavigate()

    const pageByKey = {
        "Register": "/Register",
    }
    
    function redirect(key){
        const pathToRedirect = pageByKey[key]
        navigate(pathToRedirect)
    }


    return (
        <div>
        <Navbar btn1 = {btn1} btn2 = {btn2} btn3 = {btn3}/>
        <div className={style.mainContainer}>
            <div className = {style.image}>
                <img src = "https://w7.pngwing.com/pngs/1002/346/png-transparent-virat-kohli-tissot-watch-advertising-brand-watch-photography-accessories-necktie-thumbnail.png" alt = "error"/>
            </div>
            <div className={style.form}>
                <div className={style.Input}>
                    <div style={{ border: "1px solid", width: "315px", display: "flex"}}>
                        <div style = {{padding: "9px 0px 0px 2px", width: "35px", marginLeft: "10px"}}><FaUser/></div>
                        <input type = "text" placeholder="USERNAME" /></div>
                    <div style={{ border: "1px solid", width: "315px", display: "flex" }}>
                    <div style = {{padding: "9px 0px 0px 2px", width: "35px", marginLeft: "10px"}}><HiOutlineLockClosed/></div>
                        <input type = "password" placeholder="PASSWORD" /></div>
                </div>
                <Button value={btn3} style={{ width: "70px", height: "30px", backgroundColor: "blue", border: "none", cursor: "pointer"}} />
                <div>
                    <span>Don't have an account?</span>
                    <Button value={btn4} style={{ border: "none", backgroundColor: "white", color: "blue", cursor: "pointer" }} onClick = {() => redirect("Register")}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LogIn;