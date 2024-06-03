
import { Router } from 'express';

import dotenv from 'dotenv';
import { login, signup } from '../Controller/userController.js';
dotenv.config();

const router = Router();

router.post('/signup',signup);
router.post('/login',login)


export default router;
