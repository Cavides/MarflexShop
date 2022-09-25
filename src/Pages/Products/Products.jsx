import { useEffect, useState } from "react";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./products.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../slices/cartSlice";
import { useGetAllProductsQuery } from "../../slices/productsApi";



function Products() {
  
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-container">
      {status === "success" ? (
        <>
          <h2>Salas y Comedores</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.title}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Agregar a Carrito
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>

      
      <Footer />
    </div>
  );
}

export default Products;
