import './Online.css'
export default function Online(props){
    return(
        <li className="rightbarFriend">
        <div className="rightbarImgContainer">
            <img src={props.user.profilePicture} alt="" className="rightbarImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{props.user.userName}</span>
    </li>
    )
}