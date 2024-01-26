import Share from '../share/Share'
import Posts from '../posts/Posts'
import './Feed.css'
import {Post} from '../../dummyData'
export default function Feed(){
    return(
<div className='feed'>
    <div className="feedWrapper">
        
<Share/>
{Post.map((data)=>(
    <Posts key={data.id} id={data.id} description={data.description} photo={data.photo} PostDate={data.PostDate} like={data.like} comments={data.comments}/>
))}
    </div>
</div>
    )
}