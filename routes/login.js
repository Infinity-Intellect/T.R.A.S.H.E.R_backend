const express = require('express')
const router = express.Router()
const Account = require("../models/account")

router.post("/", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    Account.find({ $or: [{ trasherId: username }, { email: username }], password: password }, (err, docs) => {
        if (!err) {
            if (docs.length !== 0) {
                res.json({ message: "Proceed!" })
            }
            else {
                res.json({ message: "Invalid Account!" })
            }
        }
        else {
            res.json({ error: err })
        }


    })
})

module.exports = router