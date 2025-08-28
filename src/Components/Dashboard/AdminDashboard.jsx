import React from 'react'
import Header from '../Others/Header'
import CreateTasklist from '../Others/CreateTasklist'
import Alltask from '../Others/Alltask'

function AdminDashboard(props) {
    
    
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser}/>
         <CreateTasklist/>
         <Alltask/> 
    </div>
  )
}

export default AdminDashboard