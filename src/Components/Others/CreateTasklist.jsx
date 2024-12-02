import React from 'react'

function CreateTasklist() {
  return (
    <div className='p-5  bg-[#1c1c1c] mt-7 rounded'>
    <form  className='flex flex-wrap w-full justify-between items-start  '>
        <div className='w-1/2 '>
        <div>
       <h3 className='text-xl text-gray-300 mb-0.5'>Title</h3>
       <input className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="text" placeholder='make a ui design' />
       </div>
        <div>
       <h3 className='text-xl text-gray-300 mb-0.5'>Date</h3>
       <input className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="date" name="" id="" />
       </div>
        <div>
        <h3 className='text-xl text-gray-300 mb-0.5'>Assign to</h3>
        <input className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' />
        </div>
        <div>
        <h3 className='text-xl text-gray-300 mb-0.5'>Category</h3>
        <input className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' type="text" placeholder=' design,dev, etc' />
        </div>
        </div>
      
        <div className='w-1/2 flex flex-col justify-center items-center'>
        <h3 className='text-xl text-gray-300 mb-0.5'>Description</h3>
        <textarea className='w-4/5 rounded py-1 px-2 outline-none bg-transparent border-[1px]' name="" id="" cols='30' rows='10'></textarea>
        <button className='bg-green-600 px-4 rounded-xl'>Create Task</button>
        </div>
      
       
    </form>
</div>
  )
}

export default CreateTasklist