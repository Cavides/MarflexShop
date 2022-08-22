import React from 'react'
import "./changepassword.css";

const nombre="Camilo";
const apellido="Vides";

function NewPassword() {
  return (
    <div className ="main-container">
    
    <div className = "forgtPassword-form">
    <div className = "forgtPassword-form__title">
    <h4>Cambiar Contraseña</h4> 
    </div>

    {/* Username */}
    <div className = "username"> 
      <h1> {nombre} {apellido}</h1>
      </div>


    <form>
    {/* NewPassword */}
    <div className='forgtPassword-form__field'>
          <label htmlFor='password'>
          <b>Contraseña nueva</b>
            <input className='forgtPassword-form__field-panel' type='password' name='newPass' placeholder="Ingresa tu nueva contraseña" required/>
            </label>
          </div>
    {/* RNewPassword */}
    <div className='forgtPassword-form-form__field'>
          <label htmlFor='password'>
          <b>Confirmar nueva contraseña</b>
            <input className='forgtPassword-form__field-panel' type='password' name='rNewPass' placeholder="Repite tu nueva contraseña" required/>
            </label>
          </div>
    </form>

     {/* button aceptar */}
     <button className="forgtPassword-form__cancelar">
        Cancelar
        </button>

    {/* buttton cancelar */}
    <button className="forgtPassword-form__submit">
        Cambiar
        </button>


    </div>

    </div>
  )
}

export default NewPassword
