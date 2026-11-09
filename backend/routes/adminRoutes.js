import express from 'express';
const adminRouter = express.Router();
import { addDoctor, adminLogin,getAllDoctors } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

// Admin routes
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', adminLogin);
adminRouter.post('/get-all-doctors', authAdmin, getAllDoctors);

export default adminRouter;