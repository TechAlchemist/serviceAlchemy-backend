const ticket = require('../models/ticket');
const Ticket = require('../models/ticket');

// create a new ticket
async function newTicket(req, res) {

    const ticket = new Ticket(req.body);
    console.log(ticket);
    try {
        await ticket.save();
    } 
    catch(error) {
        res.status(400).json(error);
    }
}

async function getMyTickets(req, res) {
    let userId = req.get("userid");
    const myTickets = await Ticket.find({'ticketCreator': userId})
    .sort({ createdAt: 1 })
  res.json(myTickets);
}

async function getSpecificTicket(req, res) {
    let ticketId = req.get("ticketid");
    const myTickets = await Ticket.find({'_id': ticketId})
    res.json(myTickets);
}

async function deleteTicket(req, res) {
    // console.log(JSON.stringify(req.headers));

    let ticketId = req.get('ticketid');
   Ticket.findById(ticketId, function(err, ticket) {
        ticket.remove();
        ticket.save( function(error) {
            console.log('Ticket was deleted. ');
            res.status(200).json({'status' : 'successful'})
        })
    })
}

async function updateTicket(req, res) {
    
    let ticketId = req.get('ticketid');
    
    Ticket.findById(ticketId, function (error, ticket) {
        ticket.ticketTitle = req.body.ticketTitle;
        ticket.ticketDescription = req.body.ticketDescription;
        try {
            ticket.save();
        } 
        catch(error) {
            res.status(400).json(error);
        }
    })

}

async function getOpenTickets(req, res) {

    const myTickets = await Ticket.find({'closed': false})
    res.json(myTickets);
}

module.exports = {
    newTicket,
    getMyTickets,
    getSpecificTicket,
    deleteTicket,
    updateTicket,
    getOpenTickets
}