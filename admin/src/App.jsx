import React from 'react'
import Login from './pages/login.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import { useContext } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import {Routes,Route} from 'react-router-dom';
import Daashboard from './pages/Admin/Daashboard.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import AllAppointments from './pages/Admin/AllAppointments.jsx';
import DoctorsList from './pages/Admin/DoctorsList.jsx';

const App = () => {

  const {aToken}=useContext(AdminContext);

  return (
    aToken ? 
    <div className='bg-[#F8F9FD] min-h-screen'>
        <Navbar />
        <ToastContainer />
        <div className='flex items-start '>
          <Sidebar />
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/admin/dashboard' element={<Daashboard />} />
            <Route path='/admin/add-doctor' element={<AddDoctor />} />
            <Route path='/admin/all-appointments' element={<AllAppointments />} />
            <Route path='/admin/doctors-list' element={<DoctorsList />} />
          </Routes>
        </div>
    </div>
    :
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
