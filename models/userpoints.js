const mongoose = require('mongoose');

var userPointsSchema = mongoose.Schema({
    trasherId: {
        type: String,
        required: "Id required"
    },
    points: {
        type: Number
    },

})

const UserPoints = module.exports = mongoose.model('userpoints', userPointsSchema)