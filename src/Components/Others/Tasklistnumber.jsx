import React from 'react'

function Tasklistnumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
           <h2 className='text-3xl font-semibold1'>{data.taskCounts.newTask}</h2>
           <h3 className='tegxt-xl font-medium'>New Task</h3>
        
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
           <h2 className='text-3xl font-semibold1'>{data.taskCounts.active}</h2>
           <h3 className='tegxt-xl font-medium'>Accepted</h3>
        
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
           <h2 className='text-3xl font-semibold1'>{data.taskCounts.completed}</h2>
           <h3 className='tegxt-xl font-medium'>Comleted</h3>
        
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-orange-400'>
           <h2 className='text-3xl font-semibold1'>{data.taskCounts.failed}</h2>
           <h3 className='tegxt-xl font-medium'>Failed</h3>
        
        </div>
        
    </div>
  )
}

export default Tasklistnumber