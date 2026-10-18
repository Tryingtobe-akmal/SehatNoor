import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <section className="relative isolate flex min-h-[560px] flex-col items-start overflow-hidden rounded-xl bg-[#5f6fff] px-4 pt-8 text-white sm:px-8 sm:pt-10 lg:min-h-[420px] lg:flex-row lg:items-center lg:px-12 lg:py-12 xl:px-16">
      <div className="relative z-10 w-full text-center lg:max-w-[48%] lg:text-left">
        <h1 className="mx-auto max-w-[540px] text-[clamp(1.55rem,6vw,2.25rem)] font-semibold leading-tight tracking-tight sm:text-4xl lg:mx-0 lg:text-[clamp(2.1rem,3.6vw,2.7rem)]">
          Book Appointment
          <br />
          With Trusted Doctors
        </h1>

        <div className="mt-4 flex flex-col items-center gap-2 sm:mt-5 lg:flex-row lg:gap-3 lg:items-center">
          <img
            src={assets.group_profiles}
            alt="Our trusted doctors"
            className="h-9 w-auto shrink-0 sm:h-10"
          />
          <p className="max-w-[370px] text-xs leading-5 sm:text-sm lg:text-left">
            Browse our extensive list of trusted doctors and schedule your appointment with ease.
          </p>
        </div>

        <Link
          to="/doctors"
          className="mx-auto mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mx-0"
        >
          Book appointment
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <img
        src={assets.header_img}
        alt="A team of SehatNoor doctors"
        className="relative z-0 mt-auto max-h-[300px] w-full max-w-[380px] self-center object-contain object-bottom sm:max-h-[340px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:max-h-none lg:w-[50%] lg:max-w-[520px]"
      />
    </section>
  )
}

export default Header

