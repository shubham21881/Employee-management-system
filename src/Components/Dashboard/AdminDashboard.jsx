import React from 'react'
import Header from '../Others/Header'
import CreateTasklist from '../Others/CreateTasklist'
import Alltask from '../Others/Alltask'

function AdminDashboard(props) {
    console.log(data);
    
  return (
    <div className='h-screen w-full p-10'>
        <Header changeuser={props.changeUser}/>
         <CreateTasklist/>
         <Alltask/> 
    </div>
  )
}

export default AdminDashboard