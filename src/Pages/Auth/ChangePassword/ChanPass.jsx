import React from 'react'
import "./changepass.css";

const nombre="Camilo";
const apellido="Vides";

function ChanPass() {
  return (
    <div className ="main-container">
    {/* Username */}
      <div className = "username"> 
      <h1> {nombre} {apellido}</h1>
      </div>

    <div className = "changePass-form">
    <div className = "changePass-form__title">
    <h4>Change Password</h4> 
    </div>

    <form>
          {/* OldPassword */}
          <div className='changePass-form__field'>
          <label htmlFor='password'>
          <b>Contraseña antigua</b>
          <input className='changePass-form__field-panel' type='password' name='oldPass' placeholder="Enter your old password" required/>
            </label>
          </div>
    {/* NewPassword */}
    <div className='changePass-form__field'>
          <label htmlFor='password'>
          <b>Contraseña nueva</b>
            <input className='changePass-form__field-panel' type='password' name='newPass' placeholder="Enter your new password" required/>
            </label>
          </div>
    {/* RNewPassword */}
    <div className='changePass-form__field'>
          <label htmlFor='password'>
          <b>Confirmar nueva contraseña</b>
            <input className='changePass-form__field-panel' type='password' name='rNewPass' placeholder="Repeat your new password" required/>
            </label>
          </div>
    </form>

    {/* submitButton */}
    <button className="changePass-form__submit">
        Cambiar Contraseña
        </button>
    {/* ForgotPassword */}
    <div className="changePass-form__forgotpassword">
      <h4>¿Olvidaste tu contraseña?</h4>
      </div>

    </div>

    </div>

  )
}

export default ChanPass
