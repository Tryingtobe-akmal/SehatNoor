import React from 'react'
import Login from './pages/login.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import { useContext } from 'react';

const App = () => {

  const {aToken}=useContext(AdminContext);

  return (
    aToken ? 
    <div>
      <p className='text-2xl font-semibold m-auto'>You are logged in as Admin</p>
    </div>
    :
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
