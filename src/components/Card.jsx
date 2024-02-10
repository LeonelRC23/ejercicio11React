import React from "react";
import "../style/Card.css";
import { IMAGEN_ALTERNATIVA } from "../constantes";
import { Button } from "bootstrap";

const Card = ({ noticia }) => {
  return (
    <div className="cardNoticia col-sm-6 col-md-6 col-lg-4">
      <div>
        <div>
          <div className="contenedorImagen">
            <img
              src={noticia.urlToImage ? noticia.urlToImage : IMAGEN_ALTERNATIVA}
              alt={`Imgen de ${noticia.title}`}
            />
          </div>
          <div className="contenedorFuente">
            <p>{noticia.source.name}</p>
          </div>
          <div className="contenedorTitulo">
            <h4>{noticia.title}</h4>
          </div>
        </div>
        <div className="contenedorDescripcion">
          <p>
            {noticia.description ? noticia.description : "No hay descripcion"}
          </p>
        </div>
        <div className="contenedorBoton">
          <button>Leer noticia</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
