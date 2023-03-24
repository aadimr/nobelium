import style from "./scroller.module.css"

function Scroller({ profileInfo }){

    return(
        // <div className = {style.rcb}>
        // <div>
        // <img src ="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/164.png" alt = "error"/>
        // <p>Virat Kohli</p>
        // <p style = {{fontSize : "10px"}}>Right-handed batsman</p>
        // </div>
        // <div>
        // <img src ="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSVTZMz8PMrz2Yu7UrEzJSCVbvmvPRWaL8-jkOC61VE_Q97GcXzJFPdhvBaUjKf_M19pb2PsrOJTWvU15I" alt = "error"/>
        // <p>Faf du plessis</p>
        // <p style = {{fontSize : "10px"}}>Right-handed batsman</p>
        // </div>
        // <div>
        // <img src ="https://e0.pxfuel.com/wallpapers/641/27/desktop-wallpaper-get-abd-rcb-pics-ab-de-villiers-rcb-thumbnail.jpg" alt = "error"/>
        // <p>AB de Villiers</p>
        // <p style = {{fontSize : "10px", textAlign : "center"}}>Right-handed batsman and Wicket-keeper</p>
        // </div>
        // <div>
        // <img src ="https://static.toiimg.com/photo/msid-97690979/97690979.jpg" alt = "error"/>
        // <p>Chris Gayle</p>
        // <p style = {{fontSize : "10px"}}>Left-handed batsman</p>
        // </div>
        // <div>
        // <img src ="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/5471.png" alt = "error"/>
        // <p>Rajat Patidar</p>
        // <p style = {{fontSize : "10px"}}>Right-handed batsman</p>
        // </div>
        // <div>
        // <img src ="https://navbharattimes.indiatimes.com/photo/msid-86960606,imgsize-31138/pic.jpg" alt = "error"/>
        // <p>Glenn Maxwell</p>
        // <p style = {{fontSize : "10px", textAlign : "center"}}>Right-handed batsman and Bowl off break</p>
        // </div>
        // </div>


        <div className = {style.rcb}>
         {
            profileInfo.map(ele => (
               
                <div>

                <img src = {ele.image} alt = "error"/>    
                <p>{ele.name}</p>
                <p>{ele.style}</p>
                </div>
            ))
         }
        </div>
    )
}

export default Scroller;