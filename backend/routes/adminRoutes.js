import express from 'express';
const adminRouter = express.Router();
import { addDoctor, adminLogin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

// Admin routes
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', adminLogin);

export default adminRouter;