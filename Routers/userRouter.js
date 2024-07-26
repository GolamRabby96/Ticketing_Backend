import express from 'express';
import { createUser, getAllUser, getUser } from '../Controller/ticketController/userController.js'

const router = express.Router();

router.post('/addUser', createUser);
router.get('/getUser/:id', getUser);
router.get('/getAllUser', getAllUser);


const userRouter = router;
export default userRouter;