import { createContext, useState } from 'react'
import {doctors} from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'


export const AppContext = createContext()

const AppContextProvider = (props) => {  
    
    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors,setDoctors] = useState([])

    const getDoctors =async() => {
        try{
            const response = await axios.get(`${backendUrl}/api/doctor/get-all-doctors`)
            if(response.data.success){
                setDoctors(response.data.doctors)
            }
        }catch(error){
            toast.error(response.data.message || 'Failed to fetch doctors');
        }
    }

    const value = {
        doctors,
        currencySymbol,
        backendUrl,
        setDoctors,
        getDoctors
    }



    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider

