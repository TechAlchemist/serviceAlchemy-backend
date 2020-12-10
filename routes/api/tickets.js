const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/tickets');

router.post('/newTicket', ticketsCtrl.newTicket);


module.exports = router;