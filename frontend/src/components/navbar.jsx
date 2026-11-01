import {assets} from '../assets/assets.js'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const[token,setToken] = useState(true);

  return (
    <div className='flex justify-between items-center text-sm py-3 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className="w-44 h-16 cursor-pointer" src={assets.logo} alt="Logo" /> 
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
            <li className="py-1">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden"/>
        </NavLink>
         <NavLink to="/doctors">
            <li className="py-1">ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/>
        </NavLink >
         <NavLink to="/about"> 
            <li className="py-1">ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/>
        </NavLink>
         <NavLink to="/contact"> 
            <li className="py-1">CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/>
        </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ?
                 <div className='flex items-center gap-2 group relative'>
                    <img  className='w-8 rounded-full cursor-pointer' src={assets.profile_pic} alt="" />
                    <img className='w-2.5 cursor-pointer' src={assets.dropdown_icon} alt="" />
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col bg-white gap-4 p-4 shadow-lg">
                            <p onClick={()=>navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate("/my-appointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div> :
                 <button onClick={()=>navigate("/login")} className="bg-[#5f6FFF] text-white py-3 px-8 rounded-full font-light  hover:bg-[#4a5ce0] hidden md:block" >Create Account</button>
          }
        </div> 
        <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className="w-6 cursor-pointer md:hidden" alt="" />
        {/* Mobile Menu */}
        {showMenu && (
          <div className="fixed top-0 right-0 bottom-0 w-full bg-white z-20 transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <img className="w-36" src={assets.logo} alt="" />
                <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="Close menu" />
            </div>
            <div className="flex flex-col items-center gap-2 mt-10 text-lg font-medium">
                <NavLink className="px-4 py-2 rounded-full inline-block " to="/" onClick={()=>setShowMenu(false)}>
                    <p>HOME</p>
                </NavLink>
                <NavLink className="px-4 py-2 rounded-full inline-block " to="/doctors" onClick={()=>setShowMenu(false)}>
                    <p>ALL DOCTORS</p>
                </NavLink>
                <NavLink className="px-4 py-2 rounded-full inline-block "to="/about" onClick={()=>setShowMenu(false)}>
                    <p>ABOUT</p>
                </NavLink>
                <NavLink className="px-4 py-2 rounded-full inline-block " to="/contact" onClick={()=>setShowMenu(false)}> 
                    <p>CONTACT</p>
                </NavLink>
            </div>
          </div>
        )}
    </div>
  )
}

export default Navbar
