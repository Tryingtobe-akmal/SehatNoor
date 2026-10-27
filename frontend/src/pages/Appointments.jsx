import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import {assets} from '../assets/assets.js'

const Appointments = () => {
  const { doctors } = useContext(AppContext)
  const { docId } = useParams()

  const [doctorDetails, setDoctorDetails] = React.useState(null)

  React.useEffect(() => { 
   fetchDoctorDetails(docId).then((details) => {
      setDoctorDetails(details)
    })
  }, [doctors,docId])

  const fetchDoctorDetails = async (docId) => {
    const doctor = doctors.find((doc) => doc._id === docId)
    console.log('Doctor details:', doctor)
    return doctor || null
  }

  return doctorDetails && (
    <section aria-labelledby="doctor-name" className="py-2 sm:py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <div className="h-64 w-full shrink-0 overflow-hidden rounded-md bg-[#5f6fff] sm:h-44 sm:w-36 md:h-48 md:w-40">
          <img
            src={doctorDetails.image}
            alt={doctorDetails.name}
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        <div className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white p-4 sm:min-h-44 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <h1 id="doctor-name" className="text-lg font-semibold leading-tight text-gray-800 sm:text-xl">
              {doctorDetails.name}
            </h1>
            <img className="h-4 w-4 shrink-0" src={assets.verified_icon} alt="Verified doctor" />
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-600 sm:text-sm">
            <p>{doctorDetails.degree} - {doctorDetails.speciality}</p>
            <span className="rounded-full border border-gray-300 px-2 py-0.5 text-[11px] text-gray-600">
              {doctorDetails.experience}
            </span>
          </div>

          <div className="mt-3">
            <h2 className="flex items-center gap-1 text-xs font-medium text-gray-800">
              About
              <img src={assets.info_icon} alt="" className="h-3 w-3" />
            </h2>
            <p className="mt-1 text-xs leading-5 text-gray-600">
              {doctorDetails.about}
            </p>
          </div>

          <p className="mt-3 text-sm text-gray-700">
            Appointment fee: <span className="font-semibold text-gray-900">${doctorDetails.fees}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Appointments
