import { useState, useEffect } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';
import { ARRAY_CATEGORIAS, API_KEY } from './constantes';

function App() {
  const [noticias, setNoticias] = useState([]);
  const consultaAPI = async (categoria) => {
    console.log(categoria);
    const respuesta = await fetch(
      `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`
    );
    const datos = await respuesta.json();
    setNoticias(datos.articles);
  };
  useEffect(() => {
    consultaAPI(ARRAY_CATEGORIAS[0]);
  }, []);
  useEffect(() => {
    console.log(noticias);
  }, [noticias]);
  return (
    <>
      <Titulo />
      <div className='contenedorPrincipal'>
        <div className='contenedorFormulario'>
          <Formulario consultaAPI={consultaAPI} />
        </div>
        <div className='contenedorNoticias'>
          <Noticias noticias={noticias} />
        </div>
      </div>
    </>
  );
}

export default App;
