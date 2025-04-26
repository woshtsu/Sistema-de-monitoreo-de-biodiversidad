import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import animalIcon from '../assets/icons/animalIcon.svg'; // Icono de Llama
import downloadIcon from '../assets/icons/downloadIcon.svg'; // Ícono de descarga

// Componente PageLayout
export default function PageLayout() {
  return (
    <PageLayoutContainer>
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
        <AssetIcon2 src={downloadIcon} alt="Descargar" />
      </Navigation>

      {/* Contenido dinámico */}
      <Outlet />
    </PageLayoutContainer>
  );
}
// Estilos para el contenedor principal
const PageLayoutContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
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
  align-items: center;
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

// Estilos para el ícono de descarga
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
