import React, { useContext, useState } from 'react'
import { Authcontext } from '../../Context/Authprovider'
import Tasklist from '../Tasklist/Tasklist'
import Failedtask from '../Tasklist/Failedtask'

function CreateTasklist() {
  const [userdata,setUserdata] = useContext (Authcontext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [newTask, setNewTask] = useState({})

  const submithandler=(e)=>{
    e.preventDefault()
   setNewTask({taskTitle,taskDate,taskDescription,asignTo,category,active:false,newTask:true,failed:false,completed:false})
    const data=userdata
    data.forEach(element => {
        if(asignTo==element.firstName){
            element.tasks.push(newTask)
            element.taskCounts.newTask=element.taskCounts.newTask +1
        }
    });
    setUserdata(data)
    console.log(data);
    setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    
  }

  return (
    <div className='p-5  bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e)=>{
        submithandler(e)
    }} className='flex flex-wrap w-full justify-between items-start  '>
        <div className='w-1/2 '>
        <div>
       <h3 className='text-xl text-gray-300 mb-0.5'>Title</h3>
       <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="text" placeholder='make a ui design' />
       </div>
        <div>
       <h3 className='text-xl text-gray-300 mb-0.5'>Date</h3>
       <input value={taskDate} onChange={(e)=>setTaskDate(e.target.value)}className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="date" name="" id="" />
       </div>
        <div>
        <h3 className='text-xl text-gray-300 mb-0.5'>Assign to</h3>
        <input value={asignTo} onChange={(e)=>setAsignTo(e.target.value)} className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' />
        </div>
        <div>
        <h3 className='text-xl text-gray-300 mb-0.5'>Category</h3>
        <input value={category} onChange={(e)=>setCategory(e.target.value)} className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="text" placeholder=' design,dev, etc' />
        </div>
        </div>
      
        <div className='w-1/2 flex flex-col justify-center items-center'>
        <h3 className='text-xl text-gray-300 mb-0.5'>Description</h3>
        <textarea value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' name="" id="" cols='30' rows='10'></textarea>
        <button className='bg-green-600 px-4 rounded-xl'>Create Task</button>
        </div>
      
       
    </form>
</div>
  )
}

export default CreateTasklist