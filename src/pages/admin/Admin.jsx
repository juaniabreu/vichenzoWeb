import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../../services/ProductContext";
import "./Admin.css"
import TablaProductos from "./TablaProductos";
import TablaVentas from "./TablaVentas";
import FormUsuario from "./FormUsuario";

function Admin() {

  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [mostrarVentas, setMostrarVentas] = useState(false);
  const [mostrarFormUsuario,setMostrarFormUsuario] = useState(true)


const visibilidadFormUsuario=()=>{
  if(mostrarFormUsuario){
    setMostrarFormUsuario(false)
  }else{
    setMostrarFormUsuario(true)
  }
}
  const visibilidadProductos = () => setMostrarProductos(!mostrarProductos);
  const visibilidadVentas = () => setMostrarVentas(!mostrarVentas);



  return (
    <div className="admin-container">
      <div className="botones-container">
        <button className="btn-principal" onClick={visibilidadProductos}>
          Lista de productos
        </button>
        <button className="btn-principal">Lista de usuarios</button>
        <button className="btn-principal" onClick={visibilidadFormUsuario}>Dar de alta un usuario</button>
        <button className="btn-principal" onClick={visibilidadVentas}>
          Ver ventas
        </button>
      </div>
      {mostrarProductos && (<TablaProductos/>)}
      {mostrarVentas &&(<TablaVentas/>)}
      {mostrarFormUsuario &&(<FormUsuario/>)}

    </div>
  );
}

export default Admin;