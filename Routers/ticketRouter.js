import express from 'express';
import { createTicket, getAllClosedTicket, getAllTicket, getTicketById, getTicketByZone, getUpdateById, searchTicket } from '../Controller/ticketController/ticketController.js';
const router = express.Router();

router.post('/addTicket', createTicket);
router.post('/ticketStatus/:id', getUpdateById);
router.get('/allTickets', getAllTicket);
router.get('/singleTicket/:id', getTicketById);
router.get('/ticket/:name', searchTicket);
router.get('/ticketZone/:name', getTicketByZone);
router.get('/closedTicket', getAllClosedTicket);



const ticketRouter = router;
export default ticketRouter;