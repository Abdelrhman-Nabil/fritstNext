import Link from "next/link"

const HomePage=()=>{
return(
  <div>
  <h1>home page</h1>
  <ul>
  <ol><Link href="/posts">Posts page</Link></ol>
  <ol><Link href="/posts/boka">boka page</Link></ol>
  
  </ul>
  </div>
)
}
export default HomePage