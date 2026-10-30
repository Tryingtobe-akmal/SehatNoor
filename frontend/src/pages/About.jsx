import React from 'react'
import{assets} from '../assets/assets.js'

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-gray-200 rounded-lg">
        <div className="text-center text-2xl pt-10 text-grey-500">
          <div><p>ABOUT <span className="text-gray-700 font-bold">US</span></p></div>
        </div>

        <div className="my-10 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-10">
          <img className='w-full md:max-w-[360px] border-2 border-gray-300 rounded-lg' src={assets.about_image} alt="aboutImg" />
          <div className="flex flex-col justify-centre gap-6 md:w-2/4 text-sm text-gray-600">
            <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <p className="text-gray-800"><b>Our Vision</b></p>
            <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>

        <div className="text-xl my-4 ">
          <p>WHY <span className="text-gray-700 font-semiBold">CHOOSE US</span></p>
        </div>
        <div className="flex flex-col  md:flex-row text-sm text-gray-600 mb-20">
          <div className='border px-10 py-10 text-[15px] hover:bg-[#5f6fff] hover:text-white transition duration-300'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 py-10 text-[15px] hover:bg-[#5f6fff] hover:text-white transition duration-300'>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='border px-10 py-10 text-[15px] hover:bg-[#5f6fff] hover:text-white transition duration-300'>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>

    </div> 
  )
}

export default About
