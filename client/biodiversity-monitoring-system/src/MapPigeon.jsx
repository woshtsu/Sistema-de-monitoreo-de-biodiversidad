import { Map, Marker } from "pigeon-maps";
import { useEffect, useState } from "react";

export function MyMap() {
  const [data, setData] = useState(null)
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    fetch("https://apibioweb.com/api/Public/Amphibia/Species/Pristimantis%20achatinus")
      .then(res => {
        if (!res.ok) {
          throw new Error("Error al cargar los datos");
        }
        return res.json();
      })
      .then(response => {
        setApiData(response)
      })
      .catch(error => {
        console.error("Error:", error.message);
        setApiData(null)
      });
  }, []);

  return (
    <div>
      <Map
        height={300}
        defaultCenter={[-12.049041, -75.197788]}
        defaultZoom={11}>
        <Marker
          width={20}
          anchor={[-12.049041, -75.197788]}
          onClick={() => {
            if (apiData) {
              const formattedData = JSON.stringify(apiData, null, 2);
              setData(formattedData);
            }
          }}
        />
        <Marker
          width={50}
          anchor={[-12.049232, -75.198148]}
        />
      </Map>
      <div>
        {data ? (
          <pre>{data}</pre> // Mostrar el JSON formateado
        ) : (
          "Haz clic en el marcador para ver los datos"
        )}
      </div>
    </div>
  );
}