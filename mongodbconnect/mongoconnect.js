const mongoose = require('mongoose');
const config = require("../config/env");


mongoconnect = () => {
    mongoose.connect(
        config.mongodbAtlas.connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "trasher"
        },
        err => {
            if (!err) {
                console.log("Connected to mongodb");
            } else {
                console.log(err);
            }
        }
    );
};
module.exports = mongoconnect