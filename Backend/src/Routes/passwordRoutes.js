import { Router } from 'express';
import { deletePassword, getAllPasswords, savePassword } from '../Controller/passwordController.js';
import { userAuth } from '../middleWare/authMiddleware.js';

const router = Router();

router.post("/add", savePassword)
router.get("/getPassword",getAllPasswords)
router.delete("/delete",deletePassword)

export default router;