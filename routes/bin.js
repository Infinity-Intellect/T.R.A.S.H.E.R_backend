const express = require('express');
const router = express.Router();
const BinWeights = require('../models/binweights')
const MasterBinDetails = require("../models/masterBinDetails")

router.get("/addWeight", (req, res) => {
    const binId = req.query.binId
    const weight = req.query.weight
    var newWeightData = new BinWeights({
        binId: binId,
        weight: weight,
        timeAdded: Date.now()
    })
    BinWeights.find({ binId: binId }, {}, { sort: { 'timeAdded': -1 } }, (err, docs) => {
        if (!err) {
            if (docs.length !== 0) {
                console.log(docs)
                BinWeights.deleteMany({ binId: docs[0].binId }, (err, docs) => {
                    newWeightData.save()
                    res.json({ message: "Added" })
                });

            }
            else {
                newWeightData.save()
                res.json({ message: "Added" })
            }

        }
        else {
            res.json({ message: err })
        }
    })
})
router.get("/binDetails", (req, res) => {
    const binId = req.query.binId;
    MasterBinDetails.find({ binId: binId }, (err, docs) => {
        if (!err) {
            //console.log(docs)
            res.json({ weight: docs[0].currentCapacityWeight, height: docs[0].currentCapacityHeight })
        }
        else {
            res.json({ error: err })
        }
    })

})



module.exports = router;