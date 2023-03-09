// import logo from './logo.svg';
import './App.css';
import ProfileCardOne from './components/component1'
import ProfileCardTwo from './components/component2';

function App() {
  const image = "https://images.pexels.com/photos/7283846/pexels-photo-7283846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const Designation = "Graphic Designer"
  const name = "Amit"
  const description = "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design" 
  const image2 = "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const Designation2 = "Singer"
  const name2 = "Ruhi"
  const description2 = "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays and other types of music groups." 
  return (
    <div className="App">
      <div className = "ProfileCard1">
        <ProfileCardOne 
        image = {image}
        Designation = {Designation}
        name = {name}
        description = {description}
        />
        </div>
      <div className = "ProfileCard2">
      <ProfileCardTwo
        image2 = {image2}
        Designation2 = {Designation2}
        name2 = {name2}
        description2 = {description2}
        />
      </div>
    </div>
  );
}

export default App;
