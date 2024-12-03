import { useState,useEffect, useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setlocalstorage } from './Utils/Localstorage'
import { Authcontext } from './Context/Authprovider'


function App() {
 const [User, setUser] = useState(null)
 const Authdata=useContext(Authcontext)
 console.log(Authdata?.employees);
  useEffect(() => {
    if(Authdata){
        const loggedInUser=localStorage.getItem('loggedInUser')
        if (loggedInUser) {
          setUser(loggedInUser.role)
        }
    }
  }, [Authdata])
  
 
 
   
 const handlelogin=(email,password)=>{
   if(email=='admin@me.com'&&password=="123"){
   setUser('admin')
   localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
   
  }
  else if(Authdata && Authdata.employees.find((e)=>email==e.email &&password==e.password)){
      setUser('employee')
   localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    
      
      
  }
  else{
    alert("invalid credentials")
  }
   
 }
 
  
  return (
    <>
      {!User ?<Login handlelogin={handlelogin} />:""}
      {User === 'admin' && <AdminDashboard />}
      {User === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App
