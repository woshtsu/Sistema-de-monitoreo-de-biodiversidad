import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright>&copy; 2023 MyApp. All rights reserved.</Copyright>
      <SocialLinks>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </SocialLink>
        <SocialLink href="https://github.com/woshtsu" target="_blank" rel="noopener noreferrer">
          GitHub
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
      </SocialLinks>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
  justify-content: center; /* Centra el contenido verticalmente */
  padding: 1rem 0; /* Espaciado interno */
  background-color: #282c34; /* Color de fondo oscuro */
  color: white; /* Texto blanco */
  width: 100%; /* Ocupa todo el ancho de la página */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil en la parte superior */
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem; /* Espacio entre el texto y los enlaces */

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduce el tamaño del texto en pantallas pequeñas */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem; /* Espacio entre los enlaces */
`;

const SocialLink = styled.a`
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