import React from 'react'
import Header from '../Others/Header'
import CreateTasklist from '../Others/CreateTasklist'
import Alltask from '../Others/Alltask'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>
         <CreateTasklist/>
         <Alltask/> 
    </div>
  )
}

export default AdminDashboard