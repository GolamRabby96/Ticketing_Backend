import { Schema, model } from 'mongoose';

const message_updateSchema = new Schema({
    user_name: {
        type: String,
        required: true,
    },
    ticket_id: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    comment_image: {
        type: String,
        default: " ",
    },
    comment_time: {
        type: Date,
        default: Date.now
    }


}, { timestamps: true })

export default model('Message', message_updateSchema);