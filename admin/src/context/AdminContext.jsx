import { useContext, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminContext = createContext();

const AdminContextProvider = (props) => {


  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [aToken,setAToken]=useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');

  const [doctors,setDoctors]=useState(null);

  // Function to fetch all doctors from the backend
  const getAllDoctors=async()=>{
    try {
      const response = await axios.post(`${backendUrl}/api/admin/get-all-doctors`, {}, {
        headers: {
          'Authorization': `Bearer ${aToken}`
        }
      });

      if(response.data.success){

        setDoctors(response.data.doctors);

      }else{

        setDoctors(null);
        toast.error(response.data.message);
        console.error("Failed to fetch doctors:", response.data.message);

      }
      
    } catch (error) {

      console.error("Error fetching all doctors:", error);

    }
  }
// Function to change the availability of a doctor
  const changeAvailability = async (doctorId) => {
    try {
        const response = await axios.post(`${backendUrl}/api/admin/change-availability`, { doctorId }, {
          headers: {
            'Authorization': `Bearer ${aToken}`
          }
        });
      if(response.data.success){
        toast.success(response.data.message);
        getAllDoctors(); // Refresh the doctors list after changing availability
      }
    } catch (error) {
      toast.error(error.response.messsage);
    }
  }

    const value={
      aToken,
      setAToken,
      doctors,
      getAllDoctors,
      backendUrl,
      changeAvailability

    }


  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}


export { AdminContext, AdminContextProvider }