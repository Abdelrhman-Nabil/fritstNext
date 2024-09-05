import Todo from "../component/todo"
import Link from "next/link"
const About=async()=>{
     
         const response=await fetch('https://jsonplaceholder.typicode.com/posts',
           { 
            next:{
                revalidate:120
            }
        }
         )
         const posts=await response.json()
         
    const postJsx=posts.map((post)=>{
        console.log(post.id)
        return (
            <Link href={`/posts/${post.id}`} style={{width:"70%"}}>
            <div style={{
                width:"100%",
                backgroundColor:"white",
                color:"black",
                padding:"10px",
                borderRadius:"10px",
                margin:"15px"
            }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
            </Link>
        )
    })
    return(
    <div>
    <h1>about page</h1>
    <div style={{display:"flex", justifyContent:"center" ,alignItems:"center", flexDirection:"column"}}>
     {postJsx}
    </div>
    
    </div>
)
}
export default About