import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/roblox.svg'

export default function Header() {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/login">Cerrar Sesion</NavItem>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between; /* Espacio entre el logo y los enlaces */
  align-items: center; /* Alinea verticalmente los elementos */
  padding: 1rem 2rem; /* Espaciado interno */
  background-color: #282c34; /* Color de fondo oscuro */
  color: white; /* Texto blanco */
  width: 100%; /* Ocupa todo el ancho de la página */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  box-sizing: border-box; /* Incluye padding y borders en el cálculo del ancho */
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem; /* Espacio entre los enlaces */
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: royalblue; /* Cambia el color al pasar el mouse */
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduce el tamaño del texto en pantallas pequeñas */
  }
`;