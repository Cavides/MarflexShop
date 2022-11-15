const express = require("express"); 
const router = require("../Users/user_routes");

const{
    createPedidoHandler,
    getPedidoHandler,
    updatePedidoHandler,
    deletePedidoHandler,
    getAllPedidosHandler
} = require("./pedidos_controllers"); 

const router = new express.router(); 

router.get("/", getAllPedidosHandler); 

router.get ("/:id", getPedidoHandler); 

router.post ("/", createPedidoHandler); 

router.get("/", updatePedidoHandler); 

router.get("/", deletePedidoHandler); 

module.exports = router;