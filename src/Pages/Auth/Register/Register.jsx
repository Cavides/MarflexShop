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
                <input className='log-form__field-panel' type='text' name='First Name' placeholder="Enter your name here" required/>
                </label>
              </div>

               {/* primer apellido*/}
               <div className='reg-form__field'>
              <label htmlFor='text'>
                <input className='log-form__field-panel' type='text' name='first Surname' placeholder="Enter your First last name" required/>
                </label>
              </div>

               {/* segundo apellido*/}
               <div className='reg-form__field'>
              <label htmlFor='text'>
                <input className='log-form__field-panel' type='text' name='second Surname' placeholder="Enter your Second last name"/>
                </label>
              </div>

              {/* email */}
              <div className='reg-form__field'>
              <label htmlFor='email'>
                <input className='log-form__field-panel' type='text' name='email' placeholder="Enter your email address" required />
                </label>
              </div>
    
              <div className='reg-form__field'>
              {/* password */}
              <label htmlFor='password'>
                <input className='log-form__field-panel' type='password' name='password' placeholder="Enter your password" required />
                </label>
              </div>

              <div className='reg-form__field'>
              {/* repeat password */}
              <label htmlFor='password'>
                <input className='log-form__field-panel' type='password' name='rpassword' placeholder="Repeat password" required />
                </label>
              </div>
          </form>
          
          {/* No soy un robot */}

          

          {/* submit */}
            <button className="reg-form__submit">
            Register
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
