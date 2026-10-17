import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import Appointments from "./pages/Appointments.jsx";
import Navbar from "./components/navbar.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return(
    <div className="mx-3 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:specialty" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-appointments/:docId" element={<Appointments />} />
      </Routes>
    </div>
  );
}


export default App;
