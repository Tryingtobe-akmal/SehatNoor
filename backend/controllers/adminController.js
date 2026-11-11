import Validator from 'validator';
import bcrypt from 'bcrypt';
import Doctor from '../models/doctor.js';
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';


//API FOR ADDIFNG DOCTOR 
const addDoctor = async (req, res) => {

  try {
      if (typeof req.body.address === 'string') {
        
          try {
            req.body.address = JSON.parse(req.body.address);
          } catch {
            return res.status(400).json({
              success: false,
              message: 'Address must be valid JSON'
            });
      }
    }


    const {name, email, password,speciality,degree,experience,about,fees,address} = req.body;

    // Get the uploaded image path(using multer middleware)
    const imagePath = req.file.path; 

    // Get the uploaded image URL
    const imageUpload = await cloudinary.uploader.upload(imagePath, {resource_type: "image"});
    const imageUrl = imageUpload.secure_url;


    //check if all fields are provided
    if(!name || !email || !password || !speciality || !imageUrl || !degree || !experience || !about || !fees || !address) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }
    //Valiadate email 
    if(!Validator.isEmail(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email address"
        });
    }
    //valiadting password length
    if(!Validator.isLength(password, {min: 8})) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters long"
        });
    }

    // Hash the password
    const salt= await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const doctor = new Doctor({
        name,
        email,
        password: hashedPassword,
        speciality,  
        image: imageUrl,
        degree,
        experience,
        about,
        fees,
        address,
        date: Date.now(),
    });

    await doctor.save();
    
    res.status(201).json({
        success: true,
        message: "Doctor added successfully",
        doctor
    });

  } catch (error) {

    res.status(500).json({
        success: false,
        message: "Failed to add doctor",
        error: error.message
    });
    console.error("Error adding doctor:", error);
  }
};



//API FOR ADMIN LOGIN
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }
    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Generate a JWT token
    const token = jwt.sign({ email ,password}, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      token
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login as admin",
      error: error.message
    });
  }
};

//Api for getting all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({}).select('-password'); // Exclude the password field from the response
    res.status(200).json({
      success: true,
      message: "All doctors retrieved successfully",
      doctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctors",
      error: error.message
    });
  }
};

//Change availability of doctor
const changeAvailability = async (req, res) => {
  try{
    const { id } = req.body;

    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found"
      });
    }
    await doctor.findByIdAndUpdate(id, { availability: !doctor.availability }, { new: true });

    res.status(200).json({
      success: true,
      message: "Doctor availability changed successfully",
      doctor
    });

  }catch(error){
    res.status(500).json({
      success: false,
      message: "Failed to change availability",
      error: error.message
    });
  }
}

export { adminLogin, addDoctor, getAllDoctors, changeAvailability };
