const express = require('express')
const router = express.Router()
const BinWeights = require('../models/binweights')
const UserPoints = require('../models/userpoints')

router.get("/getUserPoints", (req, res) => {
    const trasherId = req.query.trasherId;
    UserPoints.find({ trasherId: trasherId }, (err, docs) => {
        res.json({ points: docs[0].points })
    })
})
router.get("/updateUserPoints", (req, res) => {
    const trasherId = req.query.trasherId;
    const binId = req.query.binId;
    BinWeights.find({ binId: binId }, (err, docs) => {
        const weight = docs[0].weight;
        var points = weight
        UserPoints.find({ trasherId: trasherId }, (err, pointResult) => {
            const currentUserPoints = pointResult[0].points;
            const updatedPoints = currentUserPoints + points
            UserPoints.updateOne({ trasherId: trasherId }, { $set: { points: updatedPoints } }, (err, result) => {
                if (!err) {
                    BinWeights.deleteOne({ binId: binId }, (err, binDeleteResult) => {
                        res.json({ message: "Updated", points: updatedPoints })
                    })

                }
                else {
                    res.json({ message: err })
                }
            })
        })
    })
})

module.exports = router