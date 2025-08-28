// import { useState,useEffect, useContext } from 'react'
// import Login from './Components/Auth/Login'
// import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
// import AdminDashboard from './Components/Dashboard/AdminDashboard'
// import { getLocalStorage, setlocalstorage } from './Utils/Localstorage'
// import { Authcontext } from './Context/Authprovider'


// function App() {
//  const [User, setUser] = useState(null)
//  const [userData] = useContext(Authcontext)
//  const [loggedInUserdata, setloggedInUserdata] = useState(null)
// //  console.log(Authdata?.employees);
// useEffect(()=>{
//   const loggedInUser = localStorage.getItem('loggedInUser')
  
//   if(loggedInUser){
//     const userData = JSON.parse(loggedInUser)
//     setUser(userData.role)
//     setloggedInUserdata(userData.data)
//   }

// },[])

 
//  console.log(userData);
 
   
//  const handlelogin=(email,password)=>{
//    if(email=='admin@me.com'&&password=="123"){
//    setUser("admin")
//    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
   
//   }
 
  
//   else if(userData ){
//     const employee = userData.find((e) => email == e.email && e.password == password)
  
//   console.log(employee);
  
//   if(employee){

//     setUser('employee')
//     setloggedInUserdata(employee)
//     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
//   }
    
      
      
//   }
//   else{
//     alert("invalid credentials")
//   }
   
//  }
//  console.log(loggedInUserdata);
 
  
//   return (
//     <>
//       {!User ?<Login handlelogin={handlelogin} />:""}
//       {User === 'admin' && <AdminDashboard changeUser={setUser} data={loggedInUserdata} />}
//       {User === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserdata} />}
//     </>
//   )
// }

// export default App



import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { Authcontext } from './Context/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(Authcontext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App