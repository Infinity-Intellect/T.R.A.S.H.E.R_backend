const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')

const login = require('./routes/login')
const signup = require('./routes/signup')
const bin = require('./routes/bin')
const userpoints = require('./routes/userpoints')

const mongoconnect = require("./mongodbconnect/mongoconnect")

const PORT = process.env.PORT || 3000

mongoconnect()
app.listen(PORT, err => {
    if (!err) {
        console.log("Listening on PORT " + PORT)
    }
    else {
        console.log(err)
    }
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use("/login", login)
app.use("/signup", signup)
app.use("/bin", bin)
app.use("/userpoints", userpoints)


app.get("/", (req, res) => {
    res.json({ message: "Success !" })
})
