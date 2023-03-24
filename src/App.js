import './App.css';
import Scroller from './component/scroller';

function App() {

  const profileInfo = [
    {
     image : "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/164.png",
     name : "Virat Kohli",
     style : "Right-handed batsman"
    },
    {
     image : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSVTZMz8PMrz2Yu7UrEzJSCVbvmvPRWaL8-jkOC61VE_Q97GcXzJFPdhvBaUjKf_M19pb2PsrOJTWvU15I",
      name : "Faf du plessis",
      style : "Right-handed batsman"
     }, 
     {
     image : "https://e0.pxfuel.com/wallpapers/641/27/desktop-wallpaper-get-abd-rcb-pics-ab-de-villiers-rcb-thumbnail.jpg",
      name : "AB de Villiers",
      style : "Right-handed batsman and Wicket-keeper"
     },
     {
     image : "https://static.toiimg.com/photo/msid-97690979/97690979.jpg",
      name : "Chris Gayle",
      style : "Left-handed batsman"
     },
     {
     image : "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/5471.png",
      name : "Rajat Patidar",
      style : "Right-handed batsman"
     },
     {
     image : "https://navbharattimes.indiatimes.com/photo/msid-86960606,imgsize-31138/pic.jpg",
      name : "Glenn Maxwell",
      style : "Right-handed batsman and Bowl off break"
     },
  ]

  


  return (
    <div className="App">
     <Scroller profileInfo = {profileInfo}/>
    </div>
  );
}

export default App;
