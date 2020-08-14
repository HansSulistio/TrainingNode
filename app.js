
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const PORT = 5000;
const HOST = '0.0.0.0';
app.use(bodyParser.json());

const postRoute = require('./routes/posts');
app.use("/posts", postRoute);

app.get("/", (req, res) => {
    res.send("Welcome to Home!");
})

//Connect DB
const urlDB = process.env.DB_CONNECTION;
mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected DB!');
});

app.listen(PORT, HOST);

console.log(`Listening to ${HOST}:${PORT}`);