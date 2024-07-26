import { Schema, model } from 'mongoose';

const ticketSchema = new Schema({
    ticket_id: {
        type: String,
        required: true
    },
    ticket_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    ticket_email: {
        type: String,
        default: '',
    },
    ticket_issue: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    ticket_zone: {
        type: String,
        required: true
    },
    ticket_priority: {
        type: String,
        enum: ['Normal', 'Medium', 'High', 'Urgent'],
        default: 'Normal',
    },
    watched: {
        type: Array,
        default: [],
    },
    ticket_status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true })

export default model('ticket', ticketSchema);


// new Date().toLocaleDateString()
// new Date().toLocaleTimeString();


// messing -- email addresses
// watched property messign
