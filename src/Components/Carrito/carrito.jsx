import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../../Reducers/Shoppingreducer';
import ProductItem from '../ProductItem';
import CarItem from '../CarritoItem/CarItem';
import { TYPES } from '../../Actions/ShoppingActions';


function Carrito() {

    const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState);
    const {products, cart}= state;


    const addToCart = (id) =>{
        console.log(id);
        dispatch({type:TYPES.ADD_TO_CART,payload:id});
    }

    const delFromCart = (id, all = false) =>{
        console.log(id,all);

        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id});
        } else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id});
        }
    }

    const clearCart = () =>{
        dispatch({type:TYPES.CLEAR_CART});
    }

  return (
    <div>
      <h1>Carrito</h1> 
      <h3>Productos</h3>
      <article className='box'>
      {products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
      </article>
      <h3>Carrito</h3>
      <article className='box'>
      <button onClick={clearCart}>Limpiar</button>
      {
        cart.map((item,index) => <CarItem key={index} data={item} delFromCart={delFromCart}/>)
      }
      </article>
    </div>
  )
}

export default Carrito
