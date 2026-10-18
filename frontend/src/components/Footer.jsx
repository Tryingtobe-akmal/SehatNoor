import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto pt-14 text-sm text-gray-600 sm:pt-20" aria-label="Site footer">
      <div className="grid grid-cols-1 gap-9 border-b border-gray-300 pb-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.9fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" aria-label="SehatNoor home" className="inline-flex">
            <img src={assets.logo} alt="SehatNoor" className="h-auto w-40" />
          </Link>
          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600">
            Find trusted doctors and book appointments with ease. SehatNoor helps you take the next step toward better care.
          </p>
        </div>

        <nav aria-label="Company">
          <h2 className="mb-4 font-semibold text-gray-700">COMPANY</h2>
          <ul className="space-y-2.5">
            <li><Link onClick={() => scrollTo(0, 0)} className="transition hover:text-[#5f6fff]" to="/">Home</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className="transition hover:text-[#5f6fff]" to="/about">About us</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className="transition hover:text-[#5f6fff]" to="/doctors">All doctors</Link></li>
            <li><Link onClick={() => scrollTo(0, 0)} className="transition hover:text-[#5f6fff]" to="/contact">Contact us</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-semibold text-gray-700">GET IN TOUCH</h2>
          <p className="max-w-xs leading-6">Questions about booking or finding a doctor?</p>
          <Link
            className="mt-2 inline-flex font-medium text-[#5f6fff] transition hover:text-[#4a5ce0]"
            to="/contact"
          >
            Visit our contact page
          </Link>
        </div>
      </div>

      <p className="py-5 text-center text-xs leading-5 text-gray-600">
        Copyright © {year} SehatNoor. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

