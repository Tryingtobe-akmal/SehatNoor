import React from 'react'
import { useContext ,useEffect} from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { getAllDoctors,doctors,aToken,changeAvailability } = useContext(AdminContext);

  useEffect(() => {

    if(aToken){
      getAllDoctors();
    }
  }, [aToken]);

  useEffect(() => {
    
  console.log("Doctors list updated:", doctors);

  }, [doctors]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full">
      <h1 className='text-lg font-medium'>Doctors List</h1>
      <div className="w-full flex flex-wrap gap-4 mt-5 gap-y-6">
        {doctors && doctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {doctors.map((doctor) => {
              return (
                <div key={doctor._id} className="flex flex-col items-center border-indigo-500 rounded-xl max-w-56 shadow-md overflow-hidden cursor-pointer hover:scale-102 transition-transform duration-300 group">
                  <img src={doctor.image} alt={doctor.name} className="bg-indigo-50 group-hover:bg-[#5f6fff]" />
                  <div className="p-4">
                    <p className="text-neutral-800 text-lg font-medium">{doctor.name}</p>
                    <p className="text-zinc-600 text-sm">{doctor.speciality}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <input type="checkbox" onChange={() => changeAvailability(doctor._id)} checked={doctor.availability} />
                      <p>Available</p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  )
}

export default DoctorsList
