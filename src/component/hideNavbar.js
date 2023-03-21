import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import style from "./hideNavbar.module.css"

function HideNavBar() {
    let [isVisble, setIsVisible] = useState(false)

    let showMenu = () => {
        setIsVisible(true)
    }

    let hideMenu = () => {
        setIsVisible(false)
    }
    return (
        <div className={style.menu}>
            {isVisble ? <RxCross2 onClick={hideMenu} /> : <AiOutlineMenu onClick={showMenu} />}
            {
                isVisble &&
                <ul className={style.hideList}>
                    {["Home", "Services", "Contact", "About Us"].map(ele => (
                        <li>{ele}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default HideNavBar;