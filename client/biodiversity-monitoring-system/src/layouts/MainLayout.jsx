import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; /* Asegura que ocupe todo el ancho */
  box-sizing: border-box; /* Evita problemas con padding y borders */
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export default function MainLayout({ onSelect }) {
  return (
    <LayoutContainer>
      <Header onSelect={onSelect} />
      <MainContent>
        {/* Aquí se renderizan las rutas hijas */}
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}