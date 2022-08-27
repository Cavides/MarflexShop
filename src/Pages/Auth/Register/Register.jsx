import React,{useState} from "react";

import "./register.css";

const logo = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";

function Register() {

  const [form, setForm] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: value});
  };

    const handlerSumbit = (e) => {
      e.preventDefault();
      console.log("info enviada",form);
    };

  return (
    <div className="main-container">
      <div className="regoMarflex">
        <img src={logo} />
      </div>
      <div className="reg-form">
        {/* title */}
        <div className="reg-form__title">Registro de Usuario</div>

        <form onSubmit={handlerSumbit}>
          {/* primer nombre */}
          <div className="reg-form__field">
            <label htmlFor="text">
              <input
                className="reg-form__field-panel"
                type="text"
                name="First Name"
                placeholder="Ingresa tu primer nombre" onChange={handlerChange}
                required
              />
            </label>
          </div>

          {/* primer apellido*/}
          <div className="reg-form__field">
            <label htmlFor="text">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="text"
                name="first Surname"
                placeholder="Ingresa tu primer apellido"
                required
              />
            </label>
          </div>

          {/* segundo apellido*/}
          <div className="reg-form__field">
            <label htmlFor="text">
              <input
                className="reg-form__field-panel" onChange={handlerChange} 
                type="text"
                name="second Surname"
                placeholder="Ingresa tu segundo apellido(opcional)"
              />
            </label>
          </div>

          {/* email */}
          <div className="reg-form__field">
            <label htmlFor="email">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="text"
                name="email"
                placeholder="Ingresa tu email"
                required
              />
            </label>
          </div>

          <div className="reg-form__field">
            {/* password */}
            <label htmlFor="password">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="password"
                name="password"
                placeholder="Ingresa contraseña"
                required
              />
            </label>
          </div>

          <div className="reg-form__field">
            {/* repeat password */}
            <label htmlFor="password">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="password"
                name="rpassword"
                placeholder="Repite contraseña"
                required
              />
            </label>
          </div>
           {/* submit */}
        <button type="submit" className="reg-form__submit">Registrarse</button>
        </form>

        {/* No soy un robot */}

        {/* regin */}
        <div className="reg-form__login">
          <h5>¿Ya tienes cuenta?</h5>
        </div>
      </div>
    </div>
  );
}

export default Register;
