import { useState, useEffect } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';
import { ARRAY_CATEGORIAS, API_KEY } from './constantes';
import apiBusinessEmergencia from './mocks/apiBusinessEmergencia.json';
import apiEntertainmentEmergencia from './mocks/apiEntertainmentEmergencia.json';
import apiGeneralEmergencia from './mocks/apiGeneralEmergencia.json';
import apiHealtEmergencia from './mocks/apiHealthEmergencia.json';
import apiScienceEmergencia from './mocks/apiScienceEmergencia.json';
import apiSportEmergencia from './mocks/apiSportsEmergencia.json';
import apiTechnologyEmergencia from './mocks/apiTechnologyEmergencia.json';

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
      if (categoria == 'business') {
        setNoticias(apiBusinessEmergencia.articles);
      } else if (categoria == 'entertainment') {
        setNoticias(apiEntertainmentEmergencia.articles);
      } else if (categoria == 'general') {
        setNoticias(apiGeneralEmergencia.articles);
      } else if (categoria == 'health') {
        setNoticias(apiHealtEmergencia.articles);
      } else if (categoria == 'science') {
        setNoticias(apiScienceEmergencia.articles);
      } else if (categoria == 'sports') {
        setNoticias(apiSportEmergencia.articles);
      } else if (categoria == 'technology') {
        setNoticias(apiTechnologyEmergencia.articles);
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
