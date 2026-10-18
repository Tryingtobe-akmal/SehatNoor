import  {specialityData}  from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center text-gray-800" id="speciality">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className=" sm:w-1/3 text-center text-sm text-gray-600">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-8">
        {
            specialityData.map((item, index) => (
               <Link onClick={()=>scrollTo({top: 0, behavior: 'smooth'})} className="flex flex-col items-center justify-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] duration-500" to={`/doctors/${item.speciality}`} key={index}>
                  <img className="w-16 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
                  <p>{item.speciality}</p>
               </Link>
            ))
        }
      </div>

    </div>
  )
}

export default SpecialityMenu
