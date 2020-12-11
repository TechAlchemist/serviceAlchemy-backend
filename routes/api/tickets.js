const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/tickets');

router.get('/myTickets', ticketsCtrl.getMyTickets);
router.post('/newTicket', ticketsCtrl.newTicket);


module.exports = router;