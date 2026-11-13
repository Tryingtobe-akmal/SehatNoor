import express from 'express';
const doctorRouter = express.Router();
import { getAllDoctors } from '../controllers/doctorController.js';

doctorRouter.post('/get-all-doctors', getAllDoctors);

export { doctorRouter };