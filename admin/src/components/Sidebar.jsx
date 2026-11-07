import React from 'react'
import { AdminContext } from '../context/AdminContext.jsx'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import {assets} from '../assets/assets.js'

const Sidebar = () => {

    const {aToken}=useContext(AdminContext);

  return (
    <div className='bg-white min-h-screen '>
      {aToken && (
        <ul className='flex flex-col py-4 text-[#515151] text-sm font-semibold'>
            <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'bg-[#F8F9FD] py-3.5 px-3 md:px-9 md:min-w-72 flex items-center gap-3 border-r-3 border-blue-500' : 'flex items-center py-3.5 px-3 md:px-9 md:min-w-72 gap-3 hover:bg-[#F8F9FD]')}>
                <img src={assets.home_icon} className='w-5 h-5' alt="Dashboard" />
                <p>Dashboard</p>
            </NavLink>
            <NavLink to="/admin/add-doctor" className={({ isActive }) => (isActive ? 'bg-[#F8F9FD] py-3.5 px-3  md:px-9 md:min-w-72 flex items-center gap-3 border-r-3 border-blue-500' : 'flex items-center py-3.5 px-3 gap-3 md:px-9 md:min-w-72 hover:bg-[#F8F9FD]')}>
                <img src={assets.add_icon} className='w-5 h-5' alt="Add Doctor" />
                <p>Add Doctor</p>   
            </NavLink>
            <NavLink to="/admin/all-appointments" className={({ isActive }) => (isActive ? 'bg-[#F8F9FD] py-3.5 px-3  md:px-9 md:min-w-72 flex items-center gap-3 border-r-3 border-blue-500' : 'flex items-center py-3.5 px-3 md:px-9 md:min-w-72 gap-3 hover:bg-[#F8F9FD]')}>
                <img src={assets.appointments_icon} className='w-5 h-5' alt="All Appointments" />
                <p>Appointments</p>
            </NavLink>
            <NavLink to="/admin/doctors-list" className={({ isActive }) => (isActive ? 'bg-[#F8F9FD] py-3.5 px-3  md:px-9 md:min-w-72 flex items-center gap-3 border-r-3 border-blue-500' : 'flex items-center py-3.5 px-3 md:px-9 md:min-w-72 gap-3 hover:bg-[#F8F9FD]')}>
                <img src={assets.people_icon} className='w-5 h-5' alt="Doctors List" />
                <p>Doctors List</p>
            </NavLink>
        </ul>
      )}
    </div>
  )
}

export default Sidebar
