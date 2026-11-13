import express from 'express';
const userRouter = express.Router();
import { registerUser } from '../controllers/userController.js';
import { loginUser } from '../controllers/userController.js';

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export { userRouter };
