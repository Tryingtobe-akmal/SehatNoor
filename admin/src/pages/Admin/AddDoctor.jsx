import React from 'react'
import {assets} from '../../assets/assets.js'
import {useContext} from 'react'
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';


const AddDoctor = () => {
  const [doctorImage, setDoctorImage] = React.useState(null);
  const[doctorName,setDoctorName]=React.useState('');
  const [doctorEmail,setDoctorEmail]=React.useState('');
  const [doctorPassword,setDoctorPassword]=React.useState('');
  const [doctorExperience,setDoctorExperience]=React.useState('1 Year');
  const [doctorFees,setDoctorFees]=React.useState('');
  const [doctorSpeciality,setDoctorSpeciality]=React.useState('General Physician');
  const [doctorDegree,setDoctorDegree]=React.useState('');
  const [doctorAddress1,setDoctorAddress1]=React.useState('');
  const [doctorAddress2,setDoctorAddress2]=React.useState('');
  const [doctorAbout,setDoctorAbout]=React.useState('');

  const { backendUrl,aToken } = useContext(AdminContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    try{

      if (!doctorImage) {
        toast.error('Please upload a doctor image.');
        return;
      }

      const formData = new FormData();
      formData.append('image', doctorImage);
      formData.append('name', doctorName);
      formData.append('email', doctorEmail);
      formData.append('password', doctorPassword);
      formData.append('experience', doctorExperience);
      formData.append('fees', Number(doctorFees));
      formData.append('speciality', doctorSpeciality);
      formData.append('degree', doctorDegree);
      formData.append('address', JSON.stringify({ line1: doctorAddress1, line2: doctorAddress2 }));
      formData.append('about', doctorAbout);

      axios.post(`${backendUrl}/api/admin/add-doctor`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${aToken}`
        }
      })
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);  
          setDoctorImage(null);
          document.getElementById('doc-img').value = '';
          document.getElementById('doc-img').previousElementSibling.querySelector('img').src = assets.upload_area;
          setDoctorName('');
          setDoctorEmail('');
          setDoctorPassword('');
          setDoctorExperience('');
          setDoctorFees('');
          setDoctorSpeciality('');
          setDoctorDegree('');
          setDoctorAddress1('');
          setDoctorAddress2('');
          setDoctorAbout('');
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message || 'Error adding doctor.');
      });

    }catch(error){
      console.error('Error adding doctor:', error);
    }
   
  };

  return (
    <form action="" type='multipart/form-data' className="m-2 flex min-w-0 w-full flex-1 flex-col sm:m-4"  onSubmit={handleFormSubmit}>

      <p className="mb-3 text-lg font-bold">Add Doctor</p>

      <div className='w-full min-w-0 max-w-5xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8'>

        <div className='mb-6 flex items-center gap-3 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-3 text-gray-500 sm:mb-8 sm:gap-4 sm:p-4'>
          <label htmlFor="doc-img">
            <img className='h-14 w-14 cursor-pointer rounded-full bg-gray-100 object-cover sm:h-16 sm:w-16' src={assets.upload_area} alt='Upload doctor image' />
          </label>
          <input type="file" name="image" id="doc-img" accept="image/*" onChange={(event) => { if (event.currentTarget.files?.[0]?.type.startsWith('image/')) event.currentTarget.previousElementSibling.querySelector('img').src = URL.createObjectURL(event.currentTarget.files[0]); setDoctorImage(event.currentTarget.files[0]); }} hidden />
          <p>Upload Doctor <br /> Image</p>
        </div>

        <div className='mb-5 grid grid-cols-1 items-start gap-5 text-gray-600 sm:gap-6 lg:grid-cols-2 lg:gap-8'>

          <div className='flex w-full min-w-0 flex-col gap-4'>

            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Doctor Name</p>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" name="name" id="" placeholder="Enter Doctor Name" onChange={(event) => setDoctorName(event.currentTarget.value)}  value={doctorName} />
            </div>
            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Doctor Email</p>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="Email" name="email" id="" placeholder="Enter Doctor Email" onChange={(event) => setDoctorEmail(event.currentTarget.value)}  value={doctorEmail} />
            </div>
            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Doctor Password</p>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" name="password" id="" placeholder="Enter Doctor Password" onChange={(event) => setDoctorPassword(event.currentTarget.value)}  value={doctorPassword} />
            </div>
            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Experience</p>
              <select  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" name="experience" id="" onChange={(event) => setDoctorExperience(event.currentTarget.value)} value={doctorExperience}>
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                <option value="5">5 Year</option>
                <option value="6">6 Year</option>
                </select>
            </div>

            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Fees</p>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="number" name="fees" id="" placeholder="Enter Fees" onChange={(event) => setDoctorFees(event.currentTarget.value)} value={doctorFees} />
            </div>
            
          </div>
          <div className='flex w-full min-w-0 flex-col gap-4' >
            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Speciality</p>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" name="speciality" id="" onChange={(event) => setDoctorSpeciality(event.currentTarget.value)} value={doctorSpeciality}>
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Degree</p>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" name="degree" id="" placeholder="Enter Degree" onChange={(event) => setDoctorDegree(event.currentTarget.value)} value={doctorDegree} />
            </div>

            <div className='flex min-w-0 flex-col gap-1.5'>
              <p className='text-sm font-semibold text-gray-700'>Address</p>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" name="address" id="" placeholder="Enter Address 1" onChange={(event) => setDoctorAddress1(event.currentTarget.value)} value={doctorAddress1} />
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" name="address2" id="" placeholder="Enter Address 2" onChange={(event) => setDoctorAddress2(event.currentTarget.value)} value={doctorAddress2} />

            </div>
          </div>
        </div>
         <div className='mt-5 min-w-0'>
            <p className='mb-1.5 text-sm font-semibold text-gray-700'>About</p>
            <textarea className='min-h-32 w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100' name="about" id="" cols="100" rows="5" placeholder='Write About Doctor' onChange={(event) => setDoctorAbout(event.currentTarget.value)} value={doctorAbout}></textarea>
          </div>
          <button type='submit' className='mt-5 min-h-11 w-full rounded-lg bg-[#4B7FFB] px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto'>Add Doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor
