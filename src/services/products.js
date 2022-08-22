
// conectar aqui la API

const BASE_URL = 'https://fakestoreapi.com/';

export async function getProducts() {
  const response = await fetch(`${BASE_URL}products`);
  return await response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}products/${id}`);
  return await response.json();
}

