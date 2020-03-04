const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    trasherId: {
        type: String,
        required: "Id required"
    },
    email: {
        type: String,
        required: "Email required"
    },
    password: {
        type: String,
        required: "Password Required"
    },
    role: {
        type: String
    }
})

const Account = module.exports = mongoose.model('accounts', accountSchema)