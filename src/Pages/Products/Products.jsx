import { useEffect, useState } from "react";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./products.css";

import {getAllProducts} from "../../Services/Products_services";
import Card from '../../Components/Card/Card';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../slices/cartSlice";

// import { useGetAllProductsQuery } from "../../slices/productsApi";



function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllProducts();
      setProducts(result);
    };
    fetchData();
  }, []);
  



  // const { items: products, status } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { data, error, isLoading } = getAllProducts();
  // console.log("Api", isLoading);

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   //navigate.push("/cart"); esto es para que no se vaya a la pagina de carrito pero manda un error en consola.
  //   navigate("/cart");
  // };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-container">
      {/* {status === "success" ? (
        <> */}
          <h2>Salas y Comedores</h2>
          {/* <div className="products">
            {data &&
              data?.map((product) => (
                <div key={data.code} className="product">
                  <h3>{data.title}</h3>
                  <img src={data.image} alt={data.name} />
                  <div className="details">
                    <span>{data.desc}</span>
                    <span className="price">${data.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(data)}>
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
      )} */}
    </div> 

    <div className="products">
      {products.map(product => {
        return <Card product={product} key={product.code}/>;
      })}
    </div>

      
      <Footer />
    </div>
  );
}

export default Products;
