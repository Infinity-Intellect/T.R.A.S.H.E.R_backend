const express = require('express');
const router = express.Router();
const BinWeights = require('../models/binweights')

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




module.exports = router;