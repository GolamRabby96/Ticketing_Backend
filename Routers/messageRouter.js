import express from 'express';
import { createMessage, getMessage } from '../Controller/ticketController/messageController.js';

const router = express.Router();

router.post('/cm', createMessage);
router.get('/cm/:id', getMessage);

const messageRouter = router;
export default messageRouter;