import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    user_id: {
        type: String,
        require: true
    },
    user_name: {
        type: String,
        require: true
    },
    user_type: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_zone: {
        type: String,
        required: true
    },
    user_team: {
        type: String,
        required: true
    }

}, { timestamps: true })

export default model('User', userSchema);