const mongoose = require('mongoose')

var masterBinDetailsSchema = new mongoose.Schema({
    binId: {
        type: String,
        required: "Id required"
    },
    currentCapacityWeight: {
        type: Number
    },
    currentCapacityHeight: {
        type: Number
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
})

const MasterBinDetails = module.exports = mongoose.model('masterbindetails', masterBinDetailsSchema)