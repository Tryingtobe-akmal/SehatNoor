import React from 'react'

const Login = () => {
  const [state,setState]=React.useState("Sign Up")

  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
  const [name,setName]=React.useState("")

  const handleSubmit=(e)=>async()=>{
    e.preventDefault()
  }

  return (
    <form className="min-h-[80vh] " onSubmit={handleSubmit}>
      <div className="flex flex-col items-start p-8 gap-4 max-w-[340px] m-auto mt-10 border border-gray-200 rounded-xl text-zinc-600 shadow-lg"> 
        <p className="text-2xl font-semibold">{state=== "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state=== "Sign Up" ? "sign up" : "log in"} to book an appointment.</p>
        {
          state=== "Sign Up" &&
          <div className="w-full">
            <p>Username</p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your username' className='border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded p-2 mt-1' required />
          </div>
        }
        <div className="w-full">
          <p>Email</p>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' required  className='border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded p-2 mt-1' />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' required  className='border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded p-2 mt-1' />
        </div>
        <button type='submit' className='bg-[#5f6fff] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 w-full'>
          {state=== "Sign Up" ? "Create Account" : "Login"}
        </button>
        {
          state=== "Sign Up" ?
          <p className='text-sm'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState("Login")}>Login</span></p>
          :
          <p className='text-sm'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState("Sign Up")}>Sign Up</span></p>
        }
      </div>
    </form>
  )
}

export default Login
