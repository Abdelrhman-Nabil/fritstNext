import PostDetails from "@/app/component/postDetails";
import { Suspense } from "react";
const loadingJsx=(
    <div><h1>loading.......</h1></div>
)
const PostId=async(props)=>{
    const postid=props.params.postId

    return(
    <div>
    <h1>Post page</h1>
   <Suspense fallback={loadingJsx}>
   <PostDetails postId={postid}/>
    </Suspense>
    </div>
)
}
export default PostId