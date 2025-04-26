import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Componente principal
export default function LineChart() {
  const chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Etiquetas del eje X
    datasets: [
      {
        label: 'Ventas',
        data: [120, 200, 150, 300, 250, 400], // Datos para la primera línea
        borderColor: 'rgba(75,192,192,1)', // Color de la línea
        backgroundColor: 'rgba(75,192,192,0.2)', // Color de fondo
        fill: true, // Relleno bajo la línea
      },
      {
        label: 'Gastos',
        data: [80, 150, 100, 200, 180, 300], // Datos para la segunda línea
        borderColor: 'rgba(255,99,132,1)', // Color de la línea
        backgroundColor: 'rgba(255,99,132,0.2)', // Color de fondo
        fill: true, // Relleno bajo la línea
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h2 style={{ color: 'black' }}>Gráfico de Líneas</h2>
      <Line
        datasetIdKey="id" // Clave única para identificar datasets
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top', // Posición de la leyenda
            },
            title: {
              display: true,
              text: 'Datos de Ejemplo', // Título del gráfico
            },
          },
        }}
      />
    </div>
  );
};
