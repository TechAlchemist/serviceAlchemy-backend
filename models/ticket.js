const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketCreator: {
        type: String,
    },
    ticketCreatorName: {
        type: String,
    },
    ticketCreatorBusinessUnit: {
        type: String,
    },
    ticketCreatorContact: {
        type: String,
    },
    ownedBy: String,
    ticketTitle: {
        type: String,
    },
    ticketDescription: {
        type: String,
    },
    ticketType: {
        type: String,
        enum: ['Incident', 'Service Request']
    },
    ticketPriority: {
        type: Number,
        min: 1,
        max: 4,
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
    satisfactionSubmitted: {
        type: Boolean,
        default: false
    },
    closed: {
        type: Boolean,
        default: false
    },
    closeDescription: {
        type: String,
        default: 'No Description yet. '
    },
    workStarted: {
        type: Boolean,
        default: false
    },
    owningEngineer: {
        type: String,
        default: 'None'
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model('Ticket', ticketSchema);

