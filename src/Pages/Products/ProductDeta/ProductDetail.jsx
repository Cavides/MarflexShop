import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from "../../../Components/Header/Header";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import "./detail.css";

import { getProduct } from "../../../services/products";

function ProductDetail() {
  const [product, setProduct] = useState({});
    const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(id);
      setProduct(result);
    };
    fetchData();
  }, []);

  return (

    <div>
    <Header />
    <Navbar /> 
    <div className="detail">
      <h1 className="detail__title">{`${product.title}`}</h1>
      {" "}
      <div className="detail__info">
        {" "}
        <div className="detail__imgContainer">
          <img className="detail__img" src={product.image} />
        
        </div>
        
        <div className="detail__text">
           <h3 className="detail__category">{product.category}</h3>
          <p className="detail__description">{product.description}</p>
         
          <div className="detail__down">
             <h3 className="detail__price">{`$${product.price}`}</h3>
           
          </div>
          
        </div>
        
      </div>
    </div>


    <Footer />
    </div>

  );
}

export default ProductDetail;
