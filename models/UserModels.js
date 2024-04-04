const mongoose = require('mongoose')

const Schema = mongoose.Schema
const usersSchema = new Schema(
    {
        username: { type: String, required: [true, "Please input your username"]},
        email: { type: String, required: [true, "Please input your email"] },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', usersSchema);

module.exports = User;