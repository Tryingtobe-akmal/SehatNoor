import {assets} from '../assets/assets.js'
const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-gray-200 rounded-lg">
          <div className="text-center text-2xl pt-10 text-grey-500">
              <div><p> CONTACT <span className="text-gray-700 font-bold">US</span></p></div>
          </div>
          <div className="my-10 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-10">
                  <img className='w-full md:max-w-[360px] border-2 border-gray-300 rounded-lg' src={assets.contact_image} alt="contactImg" />
                  <div className="flex flex-col justify-centre gap-6 md:w-2/4 text-sm text-gray-600">
                    <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
                    <p className='text-gray-500'>54709 Willms Station Suite 350 <br /> Washington, USA</p>
                    <p>Tel: (415) 555‑0132 <br /> Email: sehatNoor@example.com</p>
                    <p className="font-semibold text-lg text-gray-600">CAREERS AT PRESCRIPTO</p>
                    <p className="text-gray-500">We are always looking for talented individuals to join our team. If you are passionate about healthcare technology and want to make a difference, please reach out to us at <span className="text-blue-600">sehatNoor@example.com</span></p>
                    <button className="border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition duration-300">Explore Opportunities</button>
                  </div>
          </div>
    </div>
  )
}

export default Contact;
