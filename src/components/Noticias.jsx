import React from "react";
import Card from "./Card";

const Noticias = ({ noticias }) => {
  return (
    <div className="contenedorCards row m-0">
      {noticias.map((not) => (
        <Card
          key={not.author + "-" + not.publishedAt + "-" + not.title}
          noticia={not}
        />
      ))}
    </div>
  );
};

export default Noticias;
