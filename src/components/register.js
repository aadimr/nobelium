import style from "./register.module.css"
import Button from "./button";
import Navbar from './navBar';
import { HiOutlineLockClosed } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Register() {

    const btn1 = "Home";
    const btn2 = "About Us"
    const btn3 = "Login" 
    const btn4 = "Register"

    return (
        <div>
        <Navbar btn1 = {btn1} btn2 = {btn2} btn3 = {btn3}/>
        <div className={style.mainContainer}>
            <div className={style.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1vft_3cQ6lqDymtNrs34MbvPBEOMsHPXmrTxtWW4x-tQCZ42mCvBiMXnxAjDsPBGdbQ&usqp=CAU" alt = "error"/>
            </div>
            <div className={style.form}>
                <div className={style.Input}>
                <div style={{ border: "1px solid", width: "315px", display: "flex" }}>
                        <div style={{ padding: "9px 0px 0px 2px", width: "35px", marginLeft: "10px" }}><FiMail /></div>
                        <input type="password" placeholder="GMAIL" />
                    </div>
                    <div style={{ border: "1px solid", width: "315px", display: "flex" }}>
                        <div style={{ padding: "9px 0px 0px 2px", width: "35px", marginLeft: "10px" }}><FaUser /></div>
                        <input type="text" placeholder="USERNAME" />
                    </div>
                    <div style={{ border: "1px solid", width: "315px", display: "flex" }}>
                        <div style={{ padding: "9px 0px 0px 2px", width: "35px", marginLeft: "10px" }}><HiOutlineLockClosed /></div>
                        <input type="password" placeholder="PASSWORD" />
                    </div>
                </div>
                <Button value={btn4} style={{ width: "70px", height: "30px", backgroundColor: "blue", border: "none", cursor: "pointer" }} />
                
            </div>
        </div>
        </div>
    )
}


export default Register;