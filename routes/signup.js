const express = require('express')
const router = express.Router()
const Account = require('../models/account')
const UserPoints = require("../models/userpoints")

router.post("/", (req, res) => {
    const trasherId = req.body.trasherId
    const email = req.body.email
    const password = req.body.password
    Account.find({ trasherId: trasherId }, (err, docs) => {
        if (!err) {
            if (docs.length === 0) {
                var newAccount = new Account({
                    trasherId: trasherId,
                    email: email,
                    password: password,
                    role: "user"
                })
                var newUserPoints = new UserPoints({
                    trasherId: trasherId,
                    points: 0
                })
                newUserPoints.save()
                newAccount.save({}, (err, docs) => {
                    if (!err) {
                        res.json({ message: "Account Created!" })
                    }
                    else {
                        res.json({ error: err })
                    }
                })
            }
            else {
                res.json({ message: "Already Exists!" })
            }
        }
        else {
            res.json({ error: err })
        }

    })
})
module.exports = router