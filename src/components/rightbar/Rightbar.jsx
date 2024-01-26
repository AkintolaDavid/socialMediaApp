import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";
import CakeIcon from "@mui/icons-material/Cake";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon className="birthdayImg" />
          <span className="bithdayText">
            <b>Oyewole </b>and <b>3 other friends</b> have their birthdays today
          </span>
        </div>
        <img src="assets/posts/2.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((data) => (
            <Online key={data.id} user={data} />
          ))}
        </ul>
      </div>
    </div>
  );
}
