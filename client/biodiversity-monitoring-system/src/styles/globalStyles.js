import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Estilos para el html */
  html {
    margin: 0;
    padding: 0;
    height: 100%; /* Asegura que el html ocupe toda la altura de la ventana */
    width: 100%; /* Asegura que el html ocupe todo el ancho de la pantalla */
    box-sizing: border-box; /* Incluye padding y borders en el cálculo del tamaño */
  }

  /* Estilos para el body */
  body {
    margin: 0;
    min-height: 100vh; /* Asegura que el body ocupe al menos toda la altura de la ventana */
    width: 100%; /* Asegura que el body ocupe todo el ancho de la pantalla */
    background-color: #242424; /* Color de fondo oscuro */
    color: rgba(255, 255, 255, 0.87); /* Color de texto claro */
    display: flex; /* Usa flexbox para organizar el diseño */
    flex-direction: column; /* Apila los elementos hijos verticalmente */
    align-items: stretch; /* Asegura que los elementos hijos ocupen todo el ancho */
  }

  /* Estilos para el contenedor principal (#root) */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ocupa toda la altura de la ventana */
    width: 100%; /* Ocupa todo el ancho de la pantalla */
    align-items: stretch; /* Asegura que los hijos ocupen todo el ancho */
  }

  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Variables globales */
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    height: 100%;
    width: 100%;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;