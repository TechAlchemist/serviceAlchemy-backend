const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/tickets');


router.get('/myTickets', ticketsCtrl.getMyTickets);
router.get('/singleTicket', ticketsCtrl.getSpecificTicket);
router.delete('/deleteTicket', ticketsCtrl.deleteTicket);
router.post('/updateTicket', ticketsCtrl.updateTicket);
router.post('/newTicket', ticketsCtrl.newTicket);


module.exports = router;