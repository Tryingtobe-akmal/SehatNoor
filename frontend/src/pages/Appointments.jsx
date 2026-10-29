import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import {assets} from '../assets/assets.js'
import RelatedDoctors from '../components/RelatedDoctors.jsx'

const Appointments = () => {
  const { doctors } = useContext(AppContext)
  const { docId } = useParams()

  const [doctorDetails, setDoctorDetails] = React.useState(null)
  const [docSlots,setDocSlots] = React.useState([])
  const [slotIndex,setSlotIndex] = React.useState(0)
  const [slotTime,setSlotTime] = React.useState(null)
  let daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const getAvailableSlots = async () => {
    setDocSlots([])
    //getting current date
    let today = new Date();

    for(let i=0;i<7;i++){
      //getting date with index
      let CurrDate = new Date(today);
      CurrDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // Set to the end of the day

      //setting hours
      if(today.getDate() === CurrDate.getDate()){
        CurrDate.setHours(CurrDate.getHours()>10 ? CurrDate.getHours()+1 : 10); // Set to the next hour or 10 AM
        CurrDate.setMinutes(CurrDate.getMinutes() > 30 ? 30 : 0); // Set to the next half hour 
      }else{
        CurrDate.setHours(10); // Set to 10 AM
        CurrDate.setMinutes(0); // Set to 0 minutes
      }

      let timeSlots = []

      while (CurrDate <= endTime) {
        let formattedTime = CurrDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(CurrDate), // Store the actual Date object
          formattedTime: formattedTime
        });
        CurrDate.setMinutes(CurrDate.getMinutes() + 30); // Increment by 30 minutes
      }
      setDocSlots(prev => [...prev,timeSlots]); 
    }
  }

  React.useEffect(() => { 
   fetchDoctorDetails(docId).then((details) => {
      setDoctorDetails(details)
    })
  }, [doctors,docId])

  React.useEffect(() => {
    getAvailableSlots()
    console.log('Available slots:', docSlots)
  }, [doctorDetails])


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
      {/* Booking Slots */}
      <div className="sm:ml-40 sm:pl-4 sm:py-4 mt-4 sm:mt-0 font-medium text-gray-700">
        <p className="text-sm text-gray-500">Select a date and time for your appointment</p>
        <div className='flex gap-3 item-centre w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item,index)=>
              <div key={index} onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ?'bg-[#5f6fff] text-white' : 'border border-gray-200' }`} >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            )
          }
        </div>
        <div className='flex gap-2 item-centre w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item,index)=>
              <p key={index} onClick={() => setSlotTime(item.datetime)} className={`text-sm font-light flex flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.datetime === slotTime ? 'bg-[#5f6fff] text-white' : 'bg-gray-200 text-gray-700' }`} >
                {item.formattedTime.toLowerCase()}
              </p>
            )
          }
        </div>
        <button className="mt-4 rounded-full bg-[#5f6fff] py-3 px-14 text-sm font-light text-white hover:bg-[#4a5de0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Book an Appointment
        </button>
      </div>
      {/* Listing Related Doctors */}
      <RelatedDoctors doctorDetails={doctorDetails} speciality={doctorDetails.speciality} />
    </section>
  )
}

export default Appointments
