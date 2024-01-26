import './Posts.css'
import {Post} from '../../dummyData'
import {Users} from '../../dummyData'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
export default function Posts(props){
const [like,setLike]=useState(props.like);
const [IsLiked,setIsLiked]=useState(false);
const likeHandler=()=>{
    setIsLiked(!IsLiked);
    setLike(IsLiked? like-1:like+1)
   
}
console.log(props.like)
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===props.id)[0].profilePicture}  alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u=>u.id===props.id)[0].userName}</span>
                        <span className="postDate">{props.PostDate}</span>
                    </div>
                    
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                    </div> 
                <div className="postCenter">
                    <span className="postText">
                        {props?.description}
                    </span>
                    <img src= {props.photo} alt="" className="postImg" />
                    </div> 
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{props.comments} comments</span>
                    </div>
                    </div> 
            </div>
        </div>
    )
}