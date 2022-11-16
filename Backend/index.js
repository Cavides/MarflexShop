require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

const products = require('./products');
const user = require('./Users/user_routes');
const pedido = require('./Pedidos/pedidos_routes');
const factura = require('./Facturacion/facturacion_routes');
const producto = require("./Products/products_routes");


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to shop API...");
});

app.use("/productos",producto);

app.use("/pedidos",pedido);

app.use("/users", user);

app.use("/facturas", factura);




app.get("/products", (req, res) => {
    res.send(products);
});



const  port =process.env.PORT || 5000;

const MURI = "mongodb://Cavides:WyOLatIQEU7xvW02@ac-fq87tvw-shard-00-00.xx91jur.mongodb.net:27017,ac-fq87tvw-shard-00-01.xx91jur.mongodb.net:27017,ac-fq87tvw-shard-00-02.xx91jur.mongodb.net:27017/?ssl=true&replicaSet=atlas-ygvhyq-shard-0&authSource=admin&retryWrites=true&w=majority"



app.listen(port, async () => {
    try {
        await mongoose.connect(MURI);
        console.log("Connect to mongodb");
        console.log("Server running on port " + port);
    } catch (error) {
        console.error(error);
        console.log("No está conectado");
    }
});