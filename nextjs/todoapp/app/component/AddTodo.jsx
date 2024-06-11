"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddTodo = () => {
    const router=useRouter()
    const [user,setUser]=useState({
            "title":"",
            "description":"",
            "due_date":"",
            "status":""
    })
    const handleAdd=()=>{
        fetch('http://localhost:8080/todo',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).finally(()=>router.refresh())
    }
  return (
    <div>
        Title: <input type='text' onChange={(e)=>setUser({...user,title:e.target.value})}/> <br/>
        Decription: <input type='text' onChange={(e)=>setUser({...user,description:e.target.value})}/> <br/>
        Date: <input type='date' onChange={(e)=>setUser({...user,due_date:e.target.value})}/> <br/>
        Status: <input  onChange={(e)=>setUser({...user,status:e.target.value})}/> <br/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodo