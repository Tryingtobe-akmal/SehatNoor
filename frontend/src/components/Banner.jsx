import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Banner = () => {
  return (
    <section className="relative isolate mt-10 flex min-h-[520px] flex-col items-center overflow-visible rounded-lg bg-[#5f6fff] px-5 pt-8 text-center text-white sm:px-8 sm:pt-10 lg:mt-16 lg:min-h-[284px] lg:flex-row lg:items-center lg:px-12 lg:py-10 lg:text-left xl:px-16">
      <div className="relative z-10 w-full lg:max-w-[58%]">
        <h2 className="text-[clamp(1.65rem,5.5vw,2rem)] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[clamp(1.9rem,3vw,2rem)]">
          Book Appointment
          <br />
          With 100+ Trusted Doctors
        </h2>
        <Link
          to="/login"
          className="mx-auto mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mx-0"
        >
          Create account
        </Link>
      </div>

      <img
        src={assets.appointment_img}
        alt="Doctor pointing toward the appointment button"
        className="relative z-0 mt-auto h-auto w-[85%] max-w-[300px] object-contain object-bottom sm:w-[60%] sm:max-w-[340px] lg:absolute lg:bottom-0 lg:right-[8%] lg:mt-0 lg:w-[31%] lg:max-w-[280px]"
      />
    </section>
  )
}

export default Banner

