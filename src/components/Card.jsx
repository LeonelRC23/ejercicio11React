import React from 'react';
import '../style/Card.css';

const Card = ({ noticia }) => {
  return (
    <div className='card'>
      <h4>{noticia.title}</h4>
      {noticia.urlToImage && <img src={noticia.urlToImage} alt={`Imgen de ${noticia.title}`}/>}
      <p>{noticia.description ? noticia.description : 'No hay descripcion'}</p>
    </div>
  );
};

export default Card;
