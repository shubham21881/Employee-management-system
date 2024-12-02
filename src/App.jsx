import { useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'


function App() {
 

  return (
    <>
      <Login />
      <EmployeeDashboard/>
      <AdminDashboard/>
    </>
  )
}

export default App
