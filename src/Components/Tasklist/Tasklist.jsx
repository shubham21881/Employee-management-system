import React from 'react'
import Accepttask from './Accepttask'
import Newtasklist from './Newtasklist'
import Completetask from './Completetask'
import Failedtask from './Failedtask'

function Tasklist({data}) {
  return (
    <div id='tasklist' className='h-[55%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
       {
        data.tasks.map((elem,index)=>{
            if (elem.active) {
                return <Accepttask  key={index} data={elem}/>
            }
            if (elem.newTask) {
                return <Newtasklist  key={index} data={elem}/>
            }
            if (elem.completed) {
                return <Completetask  key={index} data={elem}/>
            }
            if(elem.failed){
                return <Failedtask  key={index} data={elem}/>
            }
        })
       }

        
       
       

        
      
        

    </div>
  )
}

export default Tasklist