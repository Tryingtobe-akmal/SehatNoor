import express from 'express';
const userRouter = express.Router();
import { registerUser } from '../controllers/userController.js';
import { loginUser } from '../controllers/userController.js';
import { getUserProfile } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/get-profile', authUser, getUserProfile);

export { userRouter };
