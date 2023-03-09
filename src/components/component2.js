import '../component.css';
function ProfileCardTwo(props){
    return(
    <div>
    <img src={props.image2} alt="error" className="img1"/>
    <p className = "Designation">{props.Designation2}</p>
    <p className = "name">{props.name2}</p>
    <p>{props.description2}</p>
    </div>
    )
}

export default ProfileCardTwo;