import React from "react";
import "./forgtpassword.css";

function AuthCode() {
  return (
    <div>
      <div className="main-container">
        <div className="forgtPassword-form">
          {/* title */}
          <div className="forgtPassword-form__title">
            <h2>
              <b>Recuperación de cuenta</b>
            </h2>
          </div>

          {/* text */}
          <div className="forgtPassword-form__textcode">
            <p>
              Ingresa el código que fue enviado a tu correo electrónico para
              saber que es tu cuenta.
            </p>
          </div>

          {/* code-field */}
          <div className="forgtPassword-form__code">
            <label htmlFor="number">
              <input
                className="forgtPassword-form__field-panel"
                type="number"
                name="codigo"
                placeholder="Ingresa el código"
                required
              />
            </label>
          </div>

          {/* button aceptar */}
          <button className="forgtPassword-form__cancelar">Cancelar</button>

          {/* buttton cancelar */}
          <button className="forgtPassword-form__submit">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default AuthCode;
