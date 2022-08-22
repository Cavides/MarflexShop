import React from "react";
import "./forgtpassword.css";

function ForgtPassword() {
  return (
    <div className="main-container">
      <div className="forgtPassword-form">
        {/* title */}
        <div className="forgtPassword-form__title">
          <h2>
            <b>Recupera tu cuenta</b>
          </h2>
        </div>

        {/* text */}
        <div className="forgtPassword-form__text">
          <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
        </div>

        {/* email-field */}
        <div className="forgtPassword-form__field">
          <label htmlFor="email">
            <input
              className="forgtPassword-form__field-panel"
              type="text"
              name="email"
              placeholder="Ingresa tu email"
            />
          </label>
        </div>

        {/* button aceptar */}
        <button className="forgtPassword-form__cancelar">Cancelar</button>

        {/* buttton cancelar */}
        <button className="forgtPassword-form__submit">Buscar</button>
      </div>
    </div>
  );
}

export default ForgtPassword;
