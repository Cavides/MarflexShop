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

const getAllProducts = async () =>{
    const response = await fetch(`${URL}`);
    return await response.json();
  }
const getProduct = async (_id) =>{
    const response = await fetch(`${URL}/${_id}`);
    return await response.json();
  }


export {createProduct, getAllProducts, getProduct};