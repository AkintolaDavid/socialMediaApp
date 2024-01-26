import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
export default function Share(){
    return(
<div className='share'>
   <div className="shareWrapper">
       <div className="shareTop">
           <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
           <input type="text" placeholder='What is in your mind Tina' className="shareInput" />
       </div>
       <hr className='shareHr'/>
       <div className="shareButtom">
           <div className="shareOptions">
           <div className="shareOption">
               <PermMediaIcon 
               htmlColor='tomato' className="shareIcon"/>
               <span className="shareOptionText">
                   Photo or video
               </span>
               </div>

               <div className="shareOption">
               <LabelIcon
               htmlColor='blue'  className="shareIcon"/>
               <span className="shareOptionText">
                   Tag
               </span>
               </div>


               <div className="shareOption">
               <FmdGoodIcon 
               htmlColor='green' className="shareIcon"/>
               <span className="shareOptionText">
                  Location
               </span>
               </div>


               <div className="shareOption">
               <EmojiEmotionsIcon 
               htmlColor='goldenrod' className="shareIcon"/>
               <span className="shareOptionText">
                  Feeling
               </span>
               </div>
           </div>
           <button className="shareBtn">Share</button>
       </div>
   </div>
</div>
    )
}