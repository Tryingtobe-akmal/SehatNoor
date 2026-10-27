import React from 'react'
import{useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { Link } from 'react-router-dom'
import{useNavigate} from 'react-router-dom'

export default function Doctors() {

  const {specialty } = useParams()
  const[filterDoctors, setFilterDoctors] = React.useState([])
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()

  const filterDoctorsBySpecialty = (specialty) => { 
    if(specialty){
      const filtered = doctors.filter((doctor) => doctor.speciality.toLowerCase() === specialty.toLowerCase())
      setFilterDoctors(filtered)
    }
    else{
      setFilterDoctors(doctors)
    }
  }

  React.useEffect(() => {
    filterDoctorsBySpecialty(specialty)
  }, [specialty])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => specialty === 'General Physician'? navigate('/doctors') : navigate('/doctors/General Physician')} style={{ backgroundColor: specialty === 'General Physician' ? '#e5e7eb' : 'white' }}>General Physician</p>
          <p className='w-[94vw] sm:w-auto pl-3  py-1.5 pr-16 border border-gray-300 rounded transition duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => specialty === 'Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')} style={{ backgroundColor: specialty === 'Gynecologist' ? '#e5e7eb' : 'white' }}>Gynecologist</p>
          <p className='w-[94vw] sm:w-auto pl-3  py-1.5 pr-16 border border-gray-300 rounded transition duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => specialty === 'Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')} style={{ backgroundColor: specialty === 'Dermatologist' ? '#e5e7eb' : 'white' }}>Dermatologist</p>
          <p className='w-[94vw] sm:w-auto pl-3  py-1.5 pr-16 border border-gray-300 rounded transition duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => specialty === 'Pediatricians'? navigate('/doctors') : navigate('/doctors/Pediatricians')} style={{ backgroundColor: specialty === 'Pediatricians' ? '#e5e7eb' : 'white' }}>Pediatricians</p>
          <p className='w-[94vw] sm:w-auto pl-3  py-1.5 pr-16 border border-gray-300 rounded transition duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => specialty === 'Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')} style={{ backgroundColor: specialty === 'Neurologist' ? '#e5e7eb' : 'white' }}>Neurologist</p>
          <p className='w-[94vw] sm:w-auto pl-3  py-1.5 pr-16 border border-gray-300 rounded transition duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => specialty === 'Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} style={{ backgroundColor: specialty === 'Gastroenterologist' ? '#e5e7eb' : 'white' }}>Gastroenterologist</p>
        </div>
        <div className=" grid grid-cols-2 gap-4 text-left sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {
            filterDoctors.map((doctor) => (
          <Link
            key={doctor._id}
            to={`/my-appointments/${doctor._id}`}
            className="group overflow-hidden rounded-lg border border-[#d9ddff] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f6fff]"
          >
            <div className="aspect-square overflow-hidden bg-[#e9edff]">
              <img
                src={doctor.image}
                alt={doctor.name}
                loading="lazy"
                className="h-full w-full object-contain object-bottom transition duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-2 sm:p-3">
              <p className="flex items-center gap-1.5 text-[11px] text-green-600 sm:text-xs">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Available
              </p>
              <h3 className="mt-1 truncate text-sm font-medium text-gray-800 sm:text-base">
                {doctor.name}
              </h3>
              <p className="mt-0.5 truncate text-xs text-gray-600">
                {doctor.speciality}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}