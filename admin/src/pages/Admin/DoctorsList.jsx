import React from 'react'
import { useContext ,useEffect} from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { getAllDoctors,doctors,aToken } = useContext(AdminContext);

  useEffect(() => {

    if(aToken){
      getAllDoctors();
    }

  }, [aToken]);

  useEffect(() => {
    
  console.log("Doctors list updated:", doctors);

  }, [doctors]);

  return (
    <div>
      Doctors List
      <div>
        {doctors && doctors.length > 0 ? (
          <ul>
            {doctors.map((doctor) => (
              <li key={doctor._id}>
                {doctor.name} - {doctor.specialization}
              </li>
            ))}
          </ul>
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  )
}

export default DoctorsList
