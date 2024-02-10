import { useState, useEffect } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';
import { ARRAY_CATEGORIAS, API_KEY } from './constantes';
import apiEmergencia from './mocks/apiEmergencia.json';

function App() {
  let datos = '';
  const [noticias, setNoticias] = useState([]);
  const consultaAPI = async (categoria) => {
    const respuesta = await fetch(
      `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`
    );
    datos = await respuesta.json();
    console.log(datos);
    if (respuesta.status < 400) {
      setNoticias(datos.articles);
    } else {
      setNoticias(apiEmergencia.articles);
    }
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
