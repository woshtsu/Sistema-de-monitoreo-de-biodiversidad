import React from 'react';
import styled from 'styled-components';
import logo from '../assets/icons/roblox.svg'; // Logo actual
import searchIcon from '../assets/icons/search.svg'; // Icono de búsqueda
import userIcon from '../assets/icons/user.svg'; // Icono de usuario

// Componente Header
export default function Header() {
  return (
    <StyledHeader>
      {/* Contenedor del Logo */}
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <LogoText>TradingView</LogoText>
      </LogoContainer>

      {/* Barra de Búsqueda */}
      <SearchBar>
        <SearchIcon src={searchIcon} alt="Buscar" />
        <SearchInput type="text" placeholder="Buscar (Ctrl+K)" />
      </SearchBar>

      {/* Navegación */}
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/login">Cerrar Sesion</NavItem>
      </Nav>

      {/* Elementos de Usuario */}
      <UserControls>
        <span>ES</span>
        <img src={userIcon} alt="Usuario" style={{ width: '20px', height: '20px' }} />
        <StartButton>Empiece</StartButton>
      </UserControls>
    </StyledHeader>
  );
}
// Estilos para el Header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// Estilos para el contenedor del Logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Estilos para el Logo
const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

// Estilos para el texto del Logo
const LogoText = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
`;

// Estilos para la barra de búsqueda
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 10px;
  width: 250px;
`;

// Estilos para el icono de búsqueda
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

// Estilos para el input de búsqueda
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: transparent;
`;

// Estilos para el contenedor de navegación
const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

// Estilos para los enlaces de navegación
const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; /* Azul claro al hover */
  }
`;

// Estilos para el contenedor de elementos de usuario
const UserControls = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

// Estilos para el botón "Empiece"
const StartButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: #ff6f91; /* Morado claro */
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4e78; /* Morado más oscuro al hover */
  }
`;
