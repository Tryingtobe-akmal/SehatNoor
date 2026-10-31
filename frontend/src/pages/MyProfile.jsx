import React from 'react'
import { assets } from '../assets/assets.js'

const MyProfile = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: 'John Doe',
    image: assets.profile_pic,
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: {
      line1: '57th Street,NY 10001',
      line2: 'circle 2, New York, NY 10001'
    },
    gender: 'Male',
    dob: '1990-01-01',
  });
  return (
    <div className="max-w-lg flex flex-col gap-2 mx-auto  text-sm border border-gray-200 rounded-lg p-4">
      <img src={userData.image} alt="" className="w-36 rounded" />
      {
        isEdit
          ? <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4" type="text" value={userData.name} onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} />
          : <span className="text-3xl font-medium mt-4 text-neutral-800">{userData.name}</span>
      }
      <hr className="bg-gray-200 h-[1px] border-0" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-2 gap-2 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {
            isEdit
              ? <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))} />
              : <p className="text-blue-500">{userData.phone}</p>
          }
          <p className="font-medium">Address:</p>
          {
            isEdit
              ? <p>
                <input  className="bg-gray-50" type="text" value={userData.address.line1} onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                <br />
                <input className="bg-gray-50" type="text" value={userData.address.line2} onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
              </p>
              :
              <p className="text-gray-500">{userData.address.line1}<br />{userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-2 gap-2 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {
            isEdit ?
              <select className='max-w-20 bg-gray-100' value={userData.gender} onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              :
              <p className="text-gray-400">{userData.gender}</p>
          }
          <p className="font-medium">Date of Birth:</p>
          {
            isEdit ?
              <input className="bg-gray-100 max-w-28" type="date" value={userData.dob} onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))} />
              :
              <p className="text-gray-400">{userData.dob}</p>
          }
        </div>
      </div>
      <div className="mt-10">
        {
          isEdit
            ? <button className="border border-[#5f6fff] font-medium py-2 px-8 rounded-full hover:bg-[#5f6fff] hover:text-white transition duration-300" onClick={() => setIsEdit(false)}>Save Information</button>
            : <button className="border border-[#5f6fff] font-medium py-2 px-8 rounded-full hover:bg-[#5f6fff] hover:text-white transition duration-300" onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
