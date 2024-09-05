const Title=(props)=>{
   console.log(props)
    return (
        <div>
        <h1>Title page</h1>
        <h1>{props.params.title}</h1>
       
        </div>
    )
    }
    export default Title