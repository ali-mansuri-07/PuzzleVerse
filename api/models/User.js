const mongoose = require('mongoose');
const { Schema } = mongoose;
//Creating the user schema
const UserSchema = new Schema({
    username: {
        type: String,
        // required: true,---getting validation error if turned true
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    followers: {
        type: Number,
        default: 0,
    },
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    practiceset: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;