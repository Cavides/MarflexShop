const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const products = require('./products');
const user = require('./Users/user_routes');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to shop API...");
});

app.use("/users", user)



app.get("/products", (req, res) => {
    res.send(products);
});

const  port =process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI

app.listen(port, async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connect to mongodb");
        console.log("Server running on port " + port);
    } catch (error) {
        console.error(error);
    }
});