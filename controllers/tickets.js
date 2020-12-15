const Ticket = require('../models/ticket');
const User = require('../models/user');

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
    const myTickets = await Ticket.find({'ticketCreator': userId, 'closed' : false})
    res.json(myTickets);
}

async function getMyClosedTickets(req, res) {
    let userId = req.get("userid");
    const myClosedTickets = await Ticket.find({'ticketCreator': userId, 'closed' : true})
  res.json(myClosedTickets);
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

async function claimTicket(req, res) {
    
    let ticketId = req.headers.ticketid;
    let engineerId = req.headers.engineerid;

    Ticket.findById(ticketId, function (error, ticket) {
        ticket.workStarted = true;
        ticket.owningEngineer = engineerId;
        console.log(ticket.workStarted);
        try {
            ticket.save();
        } 
        catch(error) {
            res.status(400).json(error);
        }
    })
}

async function getOpenTickets(req, res) {
    const myTickets = await Ticket.find({'workStarted': false});
    res.json(myTickets);
}

async function getClosedTickets(req, res) {
    const myTicket = await Ticket.find({'closed' : true})
    res.json(myTickets)
}

async function getEngineerOpenTickets(req, res) {
    let engineerId = req.headers.engineerid;
    const myTickets = await Ticket.find({'owningEngineer': engineerId, 'closed': false})
    res.json(myTickets);
}

async function getEngineerClosedTickets(req, res) {
    let engineerId = req.headers.engineerid;
    const myTickets = await Ticket.find({'owningEngineer': engineerId, 'closed': true})
    res.json(myTickets);
}

async function closeTicket(req, res) {
    let ticketId = req.body.ticketId;
    let closeDescription = req.body.closeDescription;

    Ticket.findById(ticketId, function (error, ticket) {
        
        ticket.closeDescription = closeDescription;
        ticket.closed = true;

        try {
            ticket.save();
        } 
        catch(error) {
            res.status(400).json(error);
        }
    })
}

async function submitSatisfactionSurvey(req, res) {
    
    let ticketId = req.body.ticketId;

    Ticket.findById(ticketId, function (error, ticket) {
        
        ticket.satisfactionSurvey = req.body.satisfactionSurvey;
        ticket.satisfaction = req.body.satisfaction;
        ticket.satisfactionSubmitted = true;

        try {
            ticket.save();
        } 
        catch(error) {
            res.status(400).json(error);
        }
    })
}

module.exports = {
    newTicket,
    getMyTickets,
    getMyClosedTickets,
    getSpecificTicket,
    deleteTicket,
    updateTicket,
    getOpenTickets,
    claimTicket,
    getEngineerOpenTickets,
    closeTicket,
    getEngineerClosedTickets,
    submitSatisfactionSurvey
}