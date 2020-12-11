const Ticket = require('../models/ticket');

// create a new ticket
async function newTicket(req, res) {

    const ticket = new Ticket(req.body);
    try {
        await ticket.save();
    } 
    catch(error) {
        res.status(400).json(error);
    }
}

async function getMyTickets(req, res) {
    // console.log(JSON.stringify(req.headers));
    let userId = req.get("userid");
    const myTickets = await Ticket.find({'ticketCreator': userId})
    .sort({ createdAt: 1 })
  res.json(myTickets);
}

module.exports = {
    newTicket,
    getMyTickets
}