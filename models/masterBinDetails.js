const mongoose = require('mongoose')

var masterBinDetailsSchema = new mongoose.Schema({
    binId: {
        type: Number,
        required: "Id required"
    },
    currentCapacityWeight: {
        type: Number
    },
    currentCapacityHeight: {
        type: Number
    },
    location: {
        type: String
    }
})

const MasterBinDetails = module.exports = mongoose.model('masterBinDetails', masterBinDetailsSchema)