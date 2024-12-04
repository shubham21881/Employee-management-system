import React from 'react'

function Newtasklist({data}) {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-red-400 p-5 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-4 rounded-md text-sm'>{data.category}</h3>
        <h3>{data.taskdate}</h3>
    </div>
    <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>  {data.taskDescription}</p>
    <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
</div>
  )
}

export default Newtasklist