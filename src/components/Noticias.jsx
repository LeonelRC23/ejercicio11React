import React from 'react';
import Card from './Card';
import '../style/Noticias.css';

const Noticias = ({ noticias }) => {
  return (
    <div className='contenedorCards'>
      {noticias.map((not) => (
        <Card key={not.author + "-" + not.publishedAt + "-" + not.title} noticia={not} />
      ))}
    </div>
  );
};

export default Noticias;
