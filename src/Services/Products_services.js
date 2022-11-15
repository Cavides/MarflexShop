const URL = "http://localhost:5000/productos";

const createProduct= async(product) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newProduct = await fetch(URL,options);
    return newProduct.json();
}