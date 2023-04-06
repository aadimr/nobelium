import style from "./aboutUs.module.css"
import image from "../image/vkfm.webp"
import Navbar from './navBar';

function AboutUs() {

    const btn1 = "Home";
    const btn2 = "About Us"
    const btn3 = "Login" 

    return (
        <div>
        <Navbar btn1 = {btn1} btn2 = {btn2} btn3 = {btn3}/>
        <div className = {style.mainContainer}>
        <div className = {style.info}>
            <div className = {style.heading}>
                <h1>About Us</h1>
                <p style = {{fontSize: "35px"}}>|</p>
            </div>
            <div className = {style.infoSec2}>
         <img src = {image} alt = "error" style = {{borderRadius: "25px"}}/>
         <h3>Age: 34</h3>
         <h3>Location: India</h3>
         </div>
        </div>
        <div className = {style.about}>
        <h2>Virat Kohli</h2>
        <p>Virat Kohli born 5th November 1988 is an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for the Delhi in Indian domestic cricket. Widely regarded as one of the greatest batsmen of all time, he holds the records for scoring most runs in T20 internationals and in the IPL. In 2020, the International Cricket Council named him the male cricketer of the decade. Kohli has also contributed to a number of India's successes, including winning the 2011 World Cup and the 2013 Champions trophy.</p>
        <p>Born and raised in New Delhi, Kohli trained at the West Delhi Cricket Academy and started his youth career with the Delhi Under-15 team. He made his international debut in 2008 and quickly became a key player in the ODI team and later made his Test debut in 2011. In 2013, Kohli reached the number one spot in the ICC rankings for ODI batsmen for the first time. During 2014 T20 World Cup, he set a record for the most runs scored in the tournament. In 2018, he achieved yet another milestone, becoming the world's top-ranked Test batsman, making him the only Indian cricketer to hold the number one spot in all three formats of the game.</p>
        </div>
        </div>
        </div>
    )
}

export default AboutUs;