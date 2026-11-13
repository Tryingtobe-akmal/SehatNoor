import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import morgan from 'morgan';
import cloudinary from 'cloudinary';
import cloudinaryConfig from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';
import {doctorRouter} from './routes/doctorRoutes.js';
import {userRouter} from './routes/userRoutes.js';
dotenv.config();


//app configuration
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
cloudinaryConfig();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));



// api endpoints
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});