import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
// import ChangePass from "./Pages/Auth/ChangePassword/ChanPass";
import ForgtPassword from "./Pages/Auth/ForgtPassWord/ForgtPassword";
import AuthCode from "./Pages/Auth/ForgtPassWord/AuthCode";
import NewPassword from "./Pages/Auth/ForgtPassWord/NewPassword";
import ErrorMessage from "./Pages/page404/Error404";

import Home from "./Pages/Home/Home";
import Products from './Pages/Products/Products';
import ProductDetail from "./Pages/Products/ProductDeta/ProductDetail";
import Contacto from './Pages/Contacto/Contacto';
import About from './Pages/About/About';

import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes/PreguntasFrecuentes";
import TyCondi from  "./Pages/TyCondi/TyCondi";
import PoliticaDevol from "./Pages/PoliticadeDevol/PoliticaDevol";
import  PoliticaDatos from "./Pages/PoliticadeDatos/PoliticaDatos";
import CoberturaEnvios from "./Pages/CoberturadeEnvios/CoberturaEnvios";

// import Pago from './Pages/Pago/Pago';

import Carrito from "./Components/Carrito/carrito";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='*' element={<ErrorMessage />} />
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/faq' element={<PreguntasFrecuentes />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/about' element={<About />} />
      <Route path='/terminosycondiciones' element={<TyCondi />} />
      <Route path='/politicadedevolucion' element={<PoliticaDevol />} />
      <Route path='/politicadedatos' element={<PoliticaDatos />} />
      <Route path='/coberturaenvios' element={<CoberturaEnvios />} />
      <Route path='products/ProductDetail/:id' element={<ProductDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgetpassword' element={<ForgtPassword />} />
      <Route path='/authcode' element={<AuthCode />} />
      <Route path='/newpassword' element={<NewPassword />} />
      <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
