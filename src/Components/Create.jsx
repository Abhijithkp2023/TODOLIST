import React, { useRef, useState } from 'react'
import axios from "axios"


const Create = () => {
  
  const [addTask,setAddTask] = useState(null)

  const handleTask = () =>{
   axios.post("http://localhost:3001/add", {task: addTask})
   .then(result => console.log(result))
   .catch(err => console.log(err))  
  }
  return (
    <div className=''>
      <input type='text' className=' mx-4 mb-6 p-2 border ring-1 ring-black border-black' placeholder='Enter Task' onChange={(e)=> setAddTask(e.target.value)} ></input>
      <button type='' className='px-3 text-md border border-black bg-black text-white' onClick={handleTask}>ADD</button>
    </div>
  )
}

export default Create
