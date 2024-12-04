import React from 'react'

function Accepttask({data}) {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 p-5 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-4 rounded-md text-sm'>{data.category}</h3>
        <h3>{data.taskdate}</h3>
    </div>
    <h2 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>  {data.taskDescription}</p>
    <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
    </div>
</div>
  )
}

export default Accepttask