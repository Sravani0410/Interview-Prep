import React from 'react'
import TodoList from '../component/TodoList'
import AddTodo from '../component/AddTodo'

const Todopage = async () => {
    let data=await fetch('http://localhost:8080/todo',{
        next:{
            revalidate:10
        }
    })
    data=await data.json()
    // console.log(data)
  return (
    <div>
        <AddTodo/>
        {data?.map(ele=><TodoList data={ele} key={ele.id}/>)}
    </div>
  )
}

export default Todopage