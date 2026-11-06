import { toast } from 'react-toastify';
import { useState } from 'react';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';

const Login = () => {
  
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [state,setState]=useState("Admin");

    const {backendUrl,setAToken}=useContext(AdminContext);

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
          if(state==="Admin"){
            const res=await axios.post(`${backendUrl}/api/admin/login`,{
              email,
              password
            });
            if(res.data.success){
              localStorage.setItem("aToken",res.data.token);
              setAToken(res.data.token);
              toast.success("Login successful");
            }else{
               toast.error(res.data.message);
            }
          }
        }catch(err){
          toast.error(err.response.data.message);
        }
    }
      
  return (
      <form action="" className="min-h-[80vh] flex flex-col justify-center items-center gap-4 mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[70vw] sm:min-w-96 border rounded-xl text-gray-700 shadow-lg">
            <p className="text-2xl font-semibold m-auto"><span className="text-[#5f6FFF]">{state}</span> Login</p>
            <div className="flex flex-col gap-1 w-full">
              <p>Email</p>
              <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-[#DADADA] rounded w-full p-2 mt-1' />  
            </div>
            <div className="flex flex-col gap-1 w-full">
                <p>Password</p>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-[#DADADA] rounded w-full p-2 mt-1' />    
            </div>
            <button className="bg-[#5f6FFF] text-white m-1 w-full p-2 rounded hover:bg-[#4a5ce0] transition duration-300" type="submit">Login</button>
            {
                state==="Admin" ?
                <p className="text-sm text-gray-500 m-auto">Not an Admin? <span onClick={()=>setState("Doctor")} className="text-[#5f6FFF] cursor-pointer">Login as Doctor</span></p> :
                <p className="text-sm text-gray-500 m-auto">Not a Doctor? <span onClick={()=>setState("Admin")} className="text-[#5f6FFF] cursor-pointer">Login as Admin</span></p>
            }
         </div>

      </form>
  )
}

export default Login
