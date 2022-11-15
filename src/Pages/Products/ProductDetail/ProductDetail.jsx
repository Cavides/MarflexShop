import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./productDetail.css";
import Header from "../../../Components/Header/Header";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import { getProduct } from '../../../Services/Products_services';

function Detail() {
  const [product, setProduct] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(_id);
      setProduct(result);
    };
    fetchData();
  }, []);

  return (
    <div>
    <Header />
    <Navbar />
    <div className='detail'>
      <h1 className='detail__title'>{`${product.title}`}</h1>
      <div className='detail__info'>
        <div className='detail__imgContainer'>
          <img className='detail__img' src={product.imagen} />
        </div>
        <div className='detail__text'>
          <h3 className='detail__category'>Categoria : {product.category}</h3>
          <h3 className='detail__category'>Tipo : {product.type}</h3>
          <p className='detail__description'>{product.descripcion}</p>
          <div className='detail__down'>
            <h3 className='detail__price'>Precio : {`$${product.price}`}</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Detail;