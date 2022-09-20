import React from 'react'

function CarItem({data,delFromCart}) {
    let {id,name,precio,quantity}=data;
  return (
    <div>
      <h4>{name}</h4>
      <h4>${precio}.00  x{quantity}  = ${precio*quantity}.00</h4>
      <button onClick={()=> delFromCart(id)}>Eliminar</button> 
      <button onClick={()=> delFromCart(id,true)}>Eliminar Todos</button> 
    </div>
  )
}

export default CarItem
