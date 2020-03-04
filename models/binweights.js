const mongoose = require('mongoose');

var binweightSchema = mongoose.Schema({
    binId: {
        type: String
    },
    weight: {
        type: Number,
        required: "weight required"
    },
    timeAdded: {
        type: Date
    }
})

const BinWeights = module.exports = mongoose.model('binweights', binweightSchema)