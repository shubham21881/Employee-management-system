import React, { createContext,useState,useEffect } from 'react'
import { getLocalStorage } from '../Utils/Localstorage'
 export const Authcontext=createContext()

function Authprovider({children}) {
 const [Userdata, setUserdata] = useState(null)

 useEffect(() => {
   
 const {employees}=getLocalStorage()
   setUserdata(employees)

     
   
 }, [])
 
   

  return (
    <div>
        <Authcontext.Provider value={[Userdata,setUserdata]}>
          {children}
        </Authcontext.Provider>
        
    </div>
  )
}

export default Authprovider