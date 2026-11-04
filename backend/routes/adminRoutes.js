import express from 'express';
const adminRouter = express.Router();
import addDoctor from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';

adminRouter.post('/add-doctor',upload.single('image'), addDoctor);

export default adminRouter;