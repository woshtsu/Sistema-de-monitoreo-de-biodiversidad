import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import MyNavItem from '../components/MyNavItem.jsx'
import animalIcon from '../assets/icons/animalIcon.svg'; // Icono de Llama
import downloadIcon from '../assets/icons/downloadIcon.svg'; // Ícono de descarga


export default function PageLayout({ valor }) {

  return (
    <PageLayoutContainer>
      {/* Encabezado */}
      <HeaderSection>
        <div>
          <AssetIcon src={valor?.image || animalIcon} alt="Animal Icon" />
          <AssetTitle>{valor?.name || 'Llama'}</AssetTitle>
        </div>
        <FinancialInfo>
          <Price>{valor?.price || '94.267'}</Price>
          <ChangePercentage>-459 -0,48%</ChangePercentage>
        </FinancialInfo>
        <SuperGraphicsButton>Ver en los supergráficos</SuperGraphicsButton>
      </HeaderSection>

      {/* Información adicional */}
      <p>A partir de hoy a las 16:31 GMT-5</p>

      {/* Navegación */}
      <Navigation>
        <MyNavItem to="." end>Métricas</MyNavItem>
        <MyNavItem to="news">Noticias</MyNavItem>
        <MyNavItem to="forecasts">Pronósticos</MyNavItem>
        <MyNavItem to="forum">Foro</MyNavItem>
        <MyNavItem to="academic-forum">Foro Académico</MyNavItem>
        <MyNavItem to="location">Ubicación</MyNavItem>
        <AssetIcon2 src={downloadIcon} alt="Descargar" />
      </Navigation>

      {/* Contenido dinámico */}
      <ContenedorDinamico>
        <Outlet />
      </ContenedorDinamico>
    </PageLayoutContainer>
  );
}
const PageLayoutContainer = styled.div`
padding: 20px;
  background-color:rgb(183, 179, 179);
  color:rgb(32, 32, 31)
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AssetIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const AssetIcon2 = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const AssetTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

const FinancialInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #333;
`;

const ChangePercentage = styled.span`
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
  color: red;
`;

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
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ContenedorDinamico = styled.div`
  font: normal bold 26px/1.1 "Souci Sans";
  letter-spacing: 2px;

  margin-top: 20px;

  display: flex; /* flex sí o sí */
  flex-direction: column; /* si quieres apilar varios componentes */
  justify-content: center; /* centra verticalmente */
  align-items: center; /* centra horizontalmente */

  width: 100vw; /* 100% del ancho de la ventana */
  height: 100vh; /* 100% de la altura de la ventana */

  max-width: 100%;
  max-height: 100%;
  overflow: visible;

  border: 4px solid rgba(0, 0, 0, 1);
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 6px 10px 0px 0px rgba(0, 0, 0, 0.3);
`;
