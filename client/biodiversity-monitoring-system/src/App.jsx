import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles.js';
import theme from './styles/theme.js';
import MainLayout from './layouts/MainLayout.jsx';
import FormLogin from './components/FormLogin.jsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        {/* Ruta principal con layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Ruta index (página principal) */}
          <Route index element={<h1>Página Principal</h1>} />
          {/* Ruta about */}
          <Route path="about" element={<h1>About</h1>} />
        </Route>
        {/* Ruta login (sin layout) */}
        <Route path="login" element={<FormLogin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;