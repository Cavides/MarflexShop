import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../slices/cartSlice";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./pago.css";

const imgpago =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/pago_sym54q.png";

function Pago() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getTotals());
}, [cart, dispatch]);

const handleAddToCart = (product) => {
  dispatch(addToCart(product));
};
const handleDecreaseCart = (product) => {
  dispatch(decreaseCart(product));
};
const handleRemoveFromCart = (product) => {
  dispatch(removeFromCart(product));
};
const handleClearCart = () => {
  dispatch(clearCart());
};
  return (
    <div>
      <Header />
      <Navbar />
      <div className="main-containerPago">
        <div className="pago-form">
          {/* title */}
          <div className="pago-form__title">Pago de Productos</div>

          <div className="pago-form__subtitle">Información del comprador</div>
          <form>
            {/* primer nombre */}
            <div className="pago-form__field">
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="First Name"
                  placeholder="Nombre"
                  required
                />
              </label>
            </div>

            {/* primer apellido*/}
            <div className="pago-form__field">
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="first Surname"
                  placeholder="Apellido"
                  required
                />
              </label>
            </div>

            {/* numero de identificacion*/}
            <div className="pago-form__field">
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="number"
                  name="documento"
                  placeholder="Ingresa tu numero de identificacion"
                />
              </label>
            </div>

            {/* email */}
            <div className="pago-form__field">
              <label htmlFor="email">
                <input
                  className="pago-form__field-panel"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* telefono */}
              <label htmlFor="number">
                <input
                  className="pago-form__field-panel"
                  type="number"
                  name="telefono"
                  placeholder="Ingresa numero de telefono"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* Departamento */}
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="Departamento"
                  placeholder="Departamento"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* Departamento */}
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="Ciudad"
                  placeholder="Ciudad"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* Direccion */}
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="direccion"
                  placeholder="Direccion de entrega"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* Descripcion*/}
              <label htmlFor="text">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="descripcion"
                  placeholder="Descripción adicional"
                  required
                />
              </label>
            </div>

            <div className="pago-form__subtitle">Información de pago</div>

            <div className="pago-form__image">
              <img src={imgpago} />
            </div>

            <div className="pago-form__field">
              {/* nombre de tarjeta*/}
              <label htmlFor="textr">
                <input
                  className="pago-form__field-panel"
                  type="text"
                  name="nombtarjeta"
                  placeholder="Nombre del propietario"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* numero de tarjeta*/}
              <label htmlFor="number">
                <input
                  className="pago-form__field-panel"
                  type="number"
                  name="numerotarjeta"
                  placeholder="Numero de la tarjeta"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* nombre de tarjeta*/}
              <label htmlFor="date">
                <input
                  className="pago-form__field-panel"
                  type="month"
                  name="Fechatar"
                  placeholder="Fecha de vencimiento"
                  required
                />
              </label>
            </div>

            <div className="pago-form__field">
              {/* nombre de tarjeta*/}
              <label htmlFor="number">
                <input
                  className="pago-form__field-panel"
                  type="number"
                  name="CVC"
                  placeholder="CVC"
                  required
                />
              </label>
            </div>
          </form>

          <button className="pago-form__cancelar">Cancelar</button>

          {/* buttton cancelar */}
          <button className="pago-form__comprar">Comprar</button>
        </div>
      </div>


      <div className="pago-form__products">
      <div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Quitar
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Limpiar carrito
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              </div>
              </div>
              </div>

      </div>


      <Footer />
    </div>
  );
}

export default Pago;
