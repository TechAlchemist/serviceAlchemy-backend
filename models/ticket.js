const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketCreator: {
        type: String,
        required: true
    },
    ownedBy: String,
    ticketTitle: {
        type: String,
        required: true
    },
    ticketDescription: {
        type: String,
        required: true
    },
    ticketType: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['incident', 'service request']
    },
    ticketPriority: {
        type: Number,
        min: 1,
        max: 5,
    },
    satisfaction: {
        type: Number,
        max: 10,
        default: -1
    },
    satisfactionSurvey: {
        type: String,
        default: 'No Feedback. '
    },
    satisfactionSubmitted: Boolean,
    closed: {
        type: Boolean,
        default: false
    },
    closedDate: {
        type: Date 
    },
    closeDescription: {
        type: String
    },
    workStarted: {
        type: Boolean,
        default: false
    },
    ownerHistory: [String]
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Ticket', ticketSchema);

