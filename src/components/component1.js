import '../component.css';
function ProfileCardOne(props){
    return(
    <div>
    <img src={props.image} alt="error" className="img1"/>
    <p className = "Designation">{props.Designation}</p>
    <p className = "name">{props.name}</p>
    <p>{props.description}</p>
    </div>
    )
}

export default ProfileCardOne;