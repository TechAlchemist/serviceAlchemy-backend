const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/tickets');


router.get('/survey', ticketsCtrl.getSurveyResults);
router.get('/openTickets', ticketsCtrl.getOpenTickets);
router.get('/closedTickets', ticketsCtrl.getMyClosedTickets);
router.get('/myTickets', ticketsCtrl.getMyTickets);
router.get('/singleTicket', ticketsCtrl.getSpecificTicket);
router.get('/engineersOpenTickets', ticketsCtrl.getEngineerOpenTickets);
router.get('/engineersClosedTickets', ticketsCtrl.getEngineerClosedTickets);
router.delete('/deleteTicket', ticketsCtrl.deleteTicket);
router.post('/satisfactionSurvey', ticketsCtrl.submitSatisfactionSurvey);
router.post('/updateTicket', ticketsCtrl.updateTicket);
router.post('/newTicket', ticketsCtrl.newTicket);
router.post('/claimTicket', ticketsCtrl.claimTicket);
router.post('/closeTicket', ticketsCtrl.closeTicket);


module.exports = router;