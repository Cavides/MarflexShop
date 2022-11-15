const URL = "http://localhost:5000/pedidos";

const createPedido= async(pedido) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newPedido = await fetch(URL,options);
    return newPedido.json();
}