import React from 'react'

import "./register.css"

const logo = "icoMarflex.png"

function Register() {
  return (
    <div className='main-container'>
    <div className="logoMarflex">
        <img src={logo}/>
      </div>
      <div className='reg-form'>
          {/* title */}
            <div className='reg-form__title'>
              Registro de Usuario
            </div>
    
          <form>
          {/* primer nombre */}
          <div className='reg-form__field'>
              <label htmlFor='text'>
                <input className='log-form__field-panel' type='text' name='First Name' placeholder="Ingresa tu primer nombre" required/>
                </label>
              </div>

               {/* primer apellido*/}
               <div className='reg-form__field'>
              <label htmlFor='text'>
                <input className='log-form__field-panel' type='text' name='first Surname' placeholder="Ingresa tu primer apellido" required/>
                </label>
              </div>

               {/* segundo apellido*/}
               <div className='reg-form__field'>
              <label htmlFor='text'>
                <input className='log-form__field-panel' type='text' name='second Surname' placeholder="Ingresa tu segundo apellido(opcional)"/>
                </label>
              </div>

              {/* email */}
              <div className='reg-form__field'>
              <label htmlFor='email'>
                <input className='log-form__field-panel' type='text' name='email' placeholder="Ingresa tu email" required />
                </label>
              </div>
    
              <div className='reg-form__field'>
              {/* password */}
              <label htmlFor='password'>
                <input className='log-form__field-panel' type='password' name='password' placeholder="Ingresa contraseña" required />
                </label>
              </div>

              <div className='reg-form__field'>
              {/* repeat password */}
              <label htmlFor='password'>
                <input className='log-form__field-panel' type='password' name='rpassword' placeholder="Repite contraseña" required />
                </label>
              </div>
          </form>
          
          {/* No soy un robot */}


          {/* submit */}
            <button className="reg-form__submit">
            Registrarse
            </button>
          {/* Login */}
            <div className="reg-form__login">
            <h5>¿Ya tienes cuenta?</h5>
            </div>
    
      </div>
        </div>
  )
}

export default Register
