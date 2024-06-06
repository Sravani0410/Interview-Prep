import React from 'react'

// with props:
// const TodoList = (props) => {
//     console.log(props)
//   return (
//     <div>
//         Title:{props.ele.title}<br/>
//         Description:{props.ele.description} <br/>
//         Status: {props.ele.status} <br/>  
//     </div>
//   )
// }

// without passing directly props still it was kind of props
const TodoList = ({ele}) => {
    // console.log(ele)
  return (
    <div className='p-5'>
        Title:{ele.title}<br/>
        Description:{ele.description} <br/>
        Status: {ele.status} <br/>  
    </div>
  )
}

export default TodoList