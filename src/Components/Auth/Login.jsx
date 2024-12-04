import {useState} from 'react'

function Login({handlelogin}) {
   
     const [Email, setEmail] = useState('')
     const [password, setpassword] = useState('')

    const submithandler=(e)=>{
        e.preventDefault()
        handlelogin(Email,password)
        setEmail('')
        setpassword('')
        
        
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                submithandler(e)
            }} className='flex items-center justify-center flex-col' >
                <input 
                value={Email}
                onChange={(e)=>{setEmail(e.target.value);
                }}
                className='border-2 placeholder:text-gray-400 py-3 px-5 border-emerald-600 text-xl rounded-full text-white  outline-none bg-transparent'
                type="email"
                placeholder='Enter your Email' />
                <input
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
                className='border-2 placeholder:text-gray-400 py-3 px-5 border-emerald-600 m-4 text-xl rounded-full text-white  outline-none bg-transparent' 
                 type="Password"
                 placeholder='Enter your password' />
                <button className='border-none placeholder:text-gray-400 py-3 px-5 bg-green-600 text-xl rounded-full text-white  outline-none '>Login</button>
            </form>

        </div>
        
    </div>
  )
}

export default Login