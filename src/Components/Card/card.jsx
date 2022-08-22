import { useState } from 'react';
import PropTypes from 'prop-types';
import "./card.css";


function Card({ product }) {

  const [bool,setBool] = useState(true);



  return (
    <div className="card">
      <div className="card__containerImg">
        <img src={product.image} className= "card__image"/>
      </div>
      <h3 className= "card__title">{product.title}</h3>

    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape(),
}
Card.defaultProps = {
  product: {},
}


export default Card;