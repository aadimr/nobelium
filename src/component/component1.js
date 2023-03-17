import { useState } from "react"
import "./component1.css"
import img1 from "../image/vk1.jpg"
import img2 from "../image/vk2.webp"
import img3 from "../image/vk3.jpg"
import img4 from "../image/vk4.jpg"
import img5 from "../image/vk5.jpg"
import img6 from "../image/vk6.jpg"
import img7 from "../image/vk7.jpeg"


function ImageChanger(){
 let img = [img1,img2,img3,img4,img5,img6,img7]
 const [image, setImage] = useState(0)

 function handleNewImage(){
    setImage((image + 1)%img.length)
 }

    return(
        <div className = "box">
            <div className = "innerBox1">
                    <img src={img[image]} alt = "error" className="img"/>
            </div>
            <div className = "innerBox2">
                <button className = "btn" onClick={handleNewImage}>Change Pic</button>
            </div>
        </div>
    )
}

export default ImageChanger;