import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>shubham👋</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-sm'>Logout</button>
    </div>
  )
}

export default Header