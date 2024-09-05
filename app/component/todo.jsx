"use client";

import { useEffect, useState } from "react";

export default function Todo(){
    const [todo,setTodo]=useState({})

 useEffect(async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/5',{
        next:{
            revalidate:180
        }
    })
    const responseResult=await response.json();
    setTodo(responseResult);
    
 },[]);
    return(
        <div>
        <h3>{todo.title}</h3>
        </div>
    );
};
