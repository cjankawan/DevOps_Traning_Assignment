const express = require("express");
const app = express()

const mongoose = require("mongoose");

const { MONGO_USER } = require("./config/config");
const { MONGO_PASSWORD } = require("./config/config"); 
const { MONGO_PORT } = require("./config/config"); 
const { MONGO_IP } = require("./config/config");

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("succesfully connected to DB"))
        .catch((e) => {
            console.log(e)
            setTimeout(connectWithRetry, 5000)
        });
}
connectWithRetry();

app.get("/", (req,res) => {
    res.send("Hellow");
});

const port = process.eventNames.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
