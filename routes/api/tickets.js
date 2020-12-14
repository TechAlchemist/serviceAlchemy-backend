const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/tickets');


router.get('/openTickets', ticketsCtrl.getOpenTickets);
router.get('/myTickets', ticketsCtrl.getMyTickets);
router.get('/singleTicket', ticketsCtrl.getSpecificTicket);
router.delete('/deleteTicket', ticketsCtrl.deleteTicket);
router.post('/updateTicket', ticketsCtrl.updateTicket);
router.post('/newTicket', ticketsCtrl.newTicket);
router.post('/claimTicket', ticketsCtrl.claimTicket);


module.exports = router;