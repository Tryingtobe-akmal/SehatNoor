import express from 'express';
import Doctor from '../models/doctor.js';

//Api for getting all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({}).select('-password').select('-email'); // Exclude the password and salt fields from the response
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

export { getAllDoctors };