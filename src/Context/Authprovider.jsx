import React, { createContext,useState,useEffect } from 'react'
import { getLocalStorage } from '../Utils/Localstorage'
 export const Authcontext=createContext()

function Authprovider({children}) {
 const [Userdata, setUserdata] = useState(null)

 useEffect(() => {
   
 const {employees,admin}=getLocalStorage()
   setUserdata({employees,admin})

      console.log(Userdata);
      

   
 }, [])
 
   

  return (
    <div>
        <Authcontext.Provider value={Userdata}>
          {children}
        </Authcontext.Provider>
        
    </div>
  )
}

export default Authprovider