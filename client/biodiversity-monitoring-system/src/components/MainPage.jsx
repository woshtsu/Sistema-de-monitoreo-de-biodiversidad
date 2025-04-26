import React from 'react';
import styled from 'styled-components';
import downloadIcon from '../assets/icons/downloadIcon.svg'; // Icono de Bitcoin
import animalIcon from '../assets/icons/animalIcon.svg'
// import tvLogo from '../assets/icons/tradingview.svg'; // Logo de TradingView

// Componente MainPage
export default function MainPage() {
  return (
    <MainPageC>
      {/* Encabezado */}
      <HeaderSection>
        <div>
          <AssetIcon src={animalIcon} alt="Llama Icon" />
          <AssetTitle>Llama</AssetTitle>
        </div>
        <FinancialInfo>
          <Price>94.267</Price>
          <ChangePercentage>-459 -0,48%</ChangePercentage>
        </FinancialInfo>
        <SuperGraphicsButton>Ver en los supergráficos</SuperGraphicsButton>
      </HeaderSection>

      {/* Información adicional */}
      <p>A partir de hoy a las 16:31 GMT-5</p>

      {/* Navegación */}
      <Navigation>
        <NavItem href="/animal" className="active">Métricas</NavItem>
        <NavItem href="#">Noticias</NavItem>
        <NavItem href="#">Pronósticos</NavItem>
        <NavItem href="#">Foro</NavItem>
        <NavItem href="#">Foro Académico</NavItem>
        <NavItem href="#">Ubicación</NavItem>
        <AssetIcon2 src={downloadIcon} />
      </Navigation>

      {/* Título del gráfico */}
      <ChartTitle>Gráfico Poblacional</ChartTitle>

      {/* Contenedor del gráfico */}
      <ChartContainer>
        {/* Gráfico simulado */}
        <Chart />

        {/* Acciones del gráfico */}
        <ChartActions>
          <ActionButton>Correo</ActionButton>
          <ActionButton>Compartir</ActionButton>
          <ActionButton>Foto</ActionButton>
          <ActionButton>Gráfico completo</ActionButton>
        </ChartActions>
      </ChartContainer>
    </MainPageC>
  );
}
// Estilos para el contenedor principal
const MainPageC = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

// Estilos para el encabezado
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// Estilos para el icono del activo
const AssetIcon = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color:rgb(0, 0, 0); /* Naranja claro */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const AssetIcon2 = styled.img`
  width: 60px;
  height: 25px;
  border-radius: 50%;
  background-color:rgba(255, 255, 255, 0); /* Naranja claro */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color:rgb(186, 234, 255); /* Morado más oscuro al hover */
  }
`;

// Estilos para el título del activo
const AssetTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

// Estilos para la información financiera
const FinancialInfo = styled.div`
  display: flex;
  justify-content: space-between; /* Alinea elementos a izquierda y derecha */
  align-items: center;
  margin-top: 10px;
`;

// Estilos para el precio
const Price = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #333;
`;

// Estilos para el cambio porcentual
const ChangePercentage = styled.span`
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
  color: red; /* Cambiar a verde si es positivo */
`;

// Estilos para el botón "Ver en los supergráficos"
const SuperGraphicsButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Estilos para la navegación
const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

// Estilos para los enlaces de navegación
const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &.active {
    border-bottom: 2px solid #007bff; /* Azul claro para el elemento activo */
  }
`;

// Estilos para el título del gráfico
const ChartTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

// Estilos para el contenedor del gráfico
const ChartContainer = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// Estilos para el gráfico (simulado)
const Chart = styled.div`
  height: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// Estilos para las acciones del gráfico
const ChartActions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

// Estilos para los botones de acción
const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
