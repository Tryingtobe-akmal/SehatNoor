import {assets} from '../assets/assets.js'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-sm py-3 mb-5 border-b border-b-gray-400'>
      <img className="w-44 h-16 cursor-pointer" src={assets.logo} alt="Logo" /> 
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
        <div>
            <button className="bg-[#5f6FFF] text-white py-3 px-8 rounded-full font-light  hover:bg-[#4a5ce0] hidden md:block" >Create Account</button>
        </div> 
    </div>
  )
}

export default Navbar
