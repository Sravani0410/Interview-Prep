"use client"
import { useRouter } from "next/navigation";
import React from "react";

const TodoList = ({ data }) => {
    // console.log(data)
    const router=useRouter()
    const handleClick=()=>{
        fetch(`http://localhost:8080/todo/${data.id}`,{
        method:"DELETE"
       }).finally(()=>router.refresh())
    }
  return (
    <div className="p-5">
      <p>id:{data.id}</p>
      <p>title:{data.title}</p>
      <p>description:{data.description}</p>
      <p>due_date:{data.due_date}</p>
      <p>status:{data.status}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default TodoList;
