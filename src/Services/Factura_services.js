import axios from "axios";

const URL = "http://localhost:5000/facturas";

const createFactura= async(factura) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(factura),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newFactura = await fetch(URL,options);
    return newFactura;
}

export {createFactura};