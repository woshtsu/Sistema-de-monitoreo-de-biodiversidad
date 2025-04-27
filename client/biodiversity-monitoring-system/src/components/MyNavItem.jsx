import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Estilos para el enlace de navegación
const StyledNavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  /* Aplicar estilo cuando el enlace está activo */
  &.active {
    border-bottom: 2px solid #007bff; /* Azul claro para el elemento activo */
  }
`;

// Componente NavItem
export default function NavItem({ to, children, end = false }) {
  return (
    <StyledNavItem
      to={to} // Ruta a la que navega
      className={({ isActive }) => (isActive ? 'active' : '')} // Clase activa
      end={end} // Coincidencia exacta (opcional)
    >
      {children} {/* Contenido del enlace */}
    </StyledNavItem>
  );
};
