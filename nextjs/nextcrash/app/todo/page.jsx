import React from 'react'
import TodoList from '../component/TodoList';
import { revalidatePath } from 'next/cache';

async function fetchData(){
    let data =await new Promise((resolve)=>{
        setTimeout(()=>resolve(),5000)
    })
    return await fetch("http://localhost:8080/todo",{
        next:{
           revalidate:0
        }
    })
}
const Todo = async() => {
    let data=await fetchData()  ;
    data=await data.json()
    // console.log(data)
  return (
    <div>This is todo page
        {data.map(ele=><TodoList ele={ele}/>)}
    </div>
  )
}

export default Todo