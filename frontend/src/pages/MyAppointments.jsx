import React from 'react'
import {useContext} from 'react'
import { AppContext } from '../context/AppContext.jsx'

const MyAppointments = () => {
  const{doctors} = useContext(AppContext)
  return (
    <div>
      <p className=" mt-12 pb-3 text-2xl font-medium text-zinc-700 border-b ">My Appointments</p>
      <div >
        {
          doctors.slice(0, 3).map((doctor, index) => (
            <div key={index} className="mt-10 grid grid-cols-[1fr_2fr] gap-4 py-2 sm:flex sm:items-center border-b border-gray-200 ">
              <div>
                <img src={doctor.image} className="w-32 bg-indigo-50" alt={doctor.name} />
              </div>
              <div className="flex-1 gap-2 text-sm text-zinc-600">
                <p className='text-neutral-800 font-semibold'>{doctor.name}</p>
                <p>{doctor.speciality}</p>
                <p className=" text-zinc-700 font-medium mt-1">Address:</p>
                <p className='text-xs'>{doctor.address.line1}</p>
                <p className='text-xs'>{doctor.address.line2}</p>
                <p className='text-xs mt-1'><span className="text-sm text-neutral-700 font-medium">Date & Time:</span> 25, July, 2024 |  8:30 PM</p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end ">
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-[#5f6fff] hover:text-white transition duration-300">Pay Online</button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition duration-300">Cancel Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
