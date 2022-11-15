import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./productDetail.css";

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
    <div className='detail'>
      <h1 className='detail__title'>{`${product.title}`}</h1>
      <div className='detail__info'>
        <div className='detail__imgContainer'>
          <img className='detail__img' src={product.imagen} />
        </div>
        <div className='detail__text'>
          <h3 className='detail__category'>{product.category}</h3>
          <p className='detail__description'>{product.descripcion}</p>
          <div className='detail__down'>
            <h3 className='detail__price'>{`$${product.price}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;