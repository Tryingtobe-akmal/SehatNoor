import { Link } from 'react-router-dom'
import { doctors } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
  const navigate = useNavigate()

  return (
    <section className="py-12 text-center sm:py-16" aria-labelledby="top-doctors-title">
      <h2 id="top-doctors-title" className="text-2xl font-semibold text-gray-800 sm:text-3xl">
        Top Doctors to Book
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="mt-7 grid grid-cols-2 gap-4 text-left sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {doctors.slice(0, 10).map((doctor) => (
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
      <div className="mt-7 text-center">
        <button onClick={() =>{navigate('/doctors');scrollTo(0, 0);}} className="inline-flex items-center gap-2 rounded-md bg-[#5f6fff] px-4 py-2 text-sm font-medium text-white hover:bg-[#4a5ce0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f6fff]">
          View All Doctors
        </button>
      </div>
    </section>
  )
}

export default TopDoctors
