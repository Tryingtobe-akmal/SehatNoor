import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext';
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const {aToken,setAToken}=useContext(AdminContext);
    const navigate=useNavigate();

    const logout = ()=>{
        navigate('/');
        aToken && setAToken('');
        aToken && localStorage.removeItem('aToken');
    }

  return (
    <div className='flex justify-between items-center px-5 py-3 bg-white shadow-md sm:px-10'>
      <div className='flex items-center gap-2 text-xs'>
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.admin_logo} alt="" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{aToken?"Admin":"Doctor"}</p>
      </div>
      <button className='bg-[#5f67e4] text-white px-4 py-1 rounded-full hover:bg-red-600' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
