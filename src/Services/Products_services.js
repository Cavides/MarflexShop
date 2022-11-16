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

  const updateProducts = async(productUpdate) => {
    const response = await fetch(`${URL}`, {
      method: 'PATCH',
      body: JSON.stringify(productUpdate),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }


export {createProduct, getAllProducts, getProduct, updateProducts };