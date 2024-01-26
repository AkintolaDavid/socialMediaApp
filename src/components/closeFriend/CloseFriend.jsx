import './CloseFriend.css'
export default function CloseFriend(props){
    return(
        <li className="sidebarFriend">
        <img src={props.user.profilePicture} alt="" className="sidebarFriendImage" />
        <span className="sidebarFriendName">{props.user.userName}</span>
    </li>

    )
}