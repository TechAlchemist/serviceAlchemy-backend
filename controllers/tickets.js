const Ticket = require('../models/ticket');

// create a new ticket
async function newTicket(req, res) {

    const ticket = new Ticket(req.body);
    console.log('ticketBody' + ticket);
    try {
        await ticket.save();
    } 
    catch(error) {
        res.status(400).json(error);
    }
}

module.exports = {
    newTicket
}