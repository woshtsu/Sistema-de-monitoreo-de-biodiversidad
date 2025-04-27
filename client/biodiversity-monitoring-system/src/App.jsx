import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles.js';
import theme from './styles/theme.js';
import MainLayout from './layouts/MainLayout.jsx';
import FormLogin from './components/FormLogin.jsx'
import FormRegister from './components/FormRegister.jsx'
import LineChart from './components/Grafica.jsx';
import PageLayout from './layouts/PageLayout.jsx';
import { useState } from 'react';

function App() {
  const [bioSeleccionado, setBioSeleccionado] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* Redirección desde la URL base */}
          <Route path="/" element={<Navigate to="/page/animal" />} />

          {/* Ruta principal con MainLayout */}
          <Route path="/page" element={<MainLayout onSelect={(valor) => setBioSeleccionado(valor)} />}>
            {/* Rutas dentro de PageLayout */}
            <Route path="animal" element={<PageLayout valor={bioSeleccionado} />}>
              {/* Contenido específico de cada subruta */}
              <Route index element={<h1>Aquí irá la gráfica</h1>} />
              <Route path="news" element={<h1>Noticias</h1>} />
              <Route path="forecasts" element={<h1>Pronósticos</h1>} />
              <Route path="forum" element={<h1>Foro</h1>} />
              <Route path="academic-forum" element={<h1>Foro Académico</h1>} />
              <Route path="location" element={<h1>Ubicación</h1>} />
            </Route>

            {/* Rutas dentro de MainLayout pero fuera de PageLayout */}
            <Route path="about" element={<h1>Sobre nosotros</h1>} />
            <Route path="dashboard" element={<LineChart />} />
          </Route>

          {/* Rutas sin MainLayout */}
          <Route path="login" element={<FormLogin />} />
          <Route path="signup" element={<FormRegister />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;

