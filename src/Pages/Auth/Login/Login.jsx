import React from 'react'

import "./Login.css"

const logo = "icoMarflex.png"


function Login() {
  return (
    <div className='main-container'>
<br/><br/>
<div className="logoMarflex">
		<img src={logo}/>
	</div>
  <div className='log-form'>
      {/* title */}
        <div className='log-form__title'>
          Login
        </div>

      <form>
          {/* email */}
          <div className='log-form__field'>
          <label htmlFor='email'>
            <input className='log-form__field-panel' type='text' name='email' placeholder="Enter your email address"/>
            </label>
          </div>

          <div className='log-form__field'>
          {/* password */}
          <label htmlFor='password'>
            <input className='log-form__field-panel' type='password' name='password' placeholder="Enter your password"/>
            </label>
          </div>
      </form>

      {/* forgotPassword */}
      <div className="log-form__forgotpassword">
      <h4>¿Olvidaste tu contraseña?</h4>
      </div>

      {/* submit */}
        <button className="log-form__submit">
        Login
        </button>

      {/* registration */}
        <div className="log-form__register">
        <h5>¿No tienes cuenta?</h5>
        </div>

  </div>
    </div>
  )
}

export default Login

