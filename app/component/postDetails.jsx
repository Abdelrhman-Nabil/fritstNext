const PostDetails=async({postId})=>{
 
    await new Promise((reolve)=>{
        setTimeout(() => {
            reolve()
        }, 5000);
    })
   
   const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
    { 
     next:{
         revalidate:120
     }
 }
  )
  const post=await response.json()
  console.log(post)
    return(
    <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </div>
)
}
export default PostDetails