import { useState, useEffect } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';
import { ARRAY_CATEGORIAS, API_KEY } from './constantes';
import apiBusinessEmergencia from './mocks/apiBusinessEmergencia.json';
import apiEntertainmentEmergencia from './mocks/apiEntertainmentEmergencia.json';

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
      console.log(datos.articles);
      console.log(apiEmergencia.articles);
      setNoticias(datos.articles);
    } else {
      if (categoria == 'business') {
        setNoticias(apiBusinessEmergencia.articles);
      } else if (categoria == 'entertainment') {
        setNoticias(apiEntertainmentEmergencia.articles);
      }
    }
  };
  useEffect(() => {
    consultaAPI(ARRAY_CATEGORIAS[0]);
  }, []);
  useEffect(() => {}, [noticias]);
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
