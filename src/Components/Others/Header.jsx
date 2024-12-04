import React from 'react'

function Header(props) {
    
    
    const logOutUser=()=>{
        localStorage.setItem("loggedInUser",'')
        props.changeUser('')
    }
    
  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-sm'>Logout</button>
    </div>
  )
}

export default Header