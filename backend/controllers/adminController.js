import Validator from 'validator';
import bcrypt from 'bcrypt';
import Doctor from '../models/doctor.js';
import { v2 as cloudinary } from 'cloudinary';

//API FOR ADDIFNG DOCTOR 
const addDoctor = async (req, res) => {

  try {
    
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

export default addDoctor;