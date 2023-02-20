import React from "react";

const Comida = ({ nombre, precio, setTotal }) => {
  const comprar = () => {
    setTotal((e)=> e+precio)

  };
  return (
    <>
      <div className="nombres">
        <h1>{nombre}</h1>
      </div>
      <div className="precio1">Precio:</div>
      <div className="precio">{precio}$</div>
      <div>
        <button onClick={comprar}>Comprar</button>
      </div>
    </>
  );
};

export default Comida;
