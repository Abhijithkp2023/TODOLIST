import React, { useEffect, useState } from 'react'
import Create from './Create';
import axios from 'axios';
import delimg from "../utils/icons8-delete-30 (1).png"
import uncheckimg from "../utils/icons8-unchecked-checkbox-50.png"




const Home = () => {
    const [todos ,setTodos] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3001/get")
      .then(result => setTodos(result.data))
      .catch(err=> console.log(err))
    },[]);
    

    const handleEdit = () => {
      axios.put("http://localhost:3001/put")

    }

  return (
    
    <div className=' flex flex-col justify-center items-center font-serif '>
      <div>
      <h2 className='p-2 my-4 text-2xl '>TODO LIST</h2>
      </div>
      <div>
      <Create />
      </div>
      <div>
      {
        todos.length===0 ?
        <div><h2>No Records</h2></div> :
        todos.map(todo => (
            <div className='bg-black text-white p-2 w-64 my-2 flex justify-between'>
              <div className='flex'>
                <img src={uncheckimg} className=' h-6 mx-1' onClick={handleEdit} />
                {todo.task}
              </div>
              <div>
             <img className='w-10/12' src={delimg}/>
              </div>
            </div>
        ))
      }
      </div>
    </div>
    
  )
}

export default Home;
