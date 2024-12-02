import React from 'react'
import Header from '../Others/Header'
import Tasklistnumber from '../Others/Tasklistnumber'
import Tasklist from '../Tasklist/Tasklist'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <Tasklistnumber/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard