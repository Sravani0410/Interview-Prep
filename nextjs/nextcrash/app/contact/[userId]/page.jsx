import React from 'react'

// method1----------------
// const adminpage = (props) => {
//   console.log(props.params)
//   return (
//     <div>adminpage {props.params.userId}</div>
//   )
// }
// method2------------------
const adminpage = async({params}) => {
  // const [data,setData]=useState(0); // --> it will give error because it will be client side like button,usestate -->that was "use client" to resolve this issuse do at 1st line put "use client"

  let data=await fetch('https://jsonplaceholder.typicode.com/posts');
  data=await data.json()

  console.log(params)
  return (
    <div>adminpage {params.userId}
    {data.map(ele=><li>{ele.title}</li>)}
    </div>
  )
}

export default adminpage