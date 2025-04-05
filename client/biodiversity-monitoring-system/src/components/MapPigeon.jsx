import { Map, Marker } from "pigeon-maps";
import { useEffect, useState } from "react";

export function MyMap() {
  const [data, setData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.freetestapi.com/api/v1/animals?search=Lion`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error al cargar los datos");
        }
        console.log(res.body);
        return res.json();
      })
      .then(response => {
        setApiData(response);
        setError(null); // Limpiar el error si la solicitud es exitosa
      })
      .catch(error => {
        console.error("Error:", error.message);
        setError("No se pudieron cargar los datos. Inténtalo más tarde.");
        setApiData(null);
      });
  }, []);

  return (
    <div>
      <Map
        height={300}
        defaultCenter={[-12.049041, -75.197788]}
        defaultZoom={17}>
        <Marker
          width={20}
          anchor={[-12.049041, -75.197788]}
          onClick={() => {
            setData(apiData[0].image)
            console.log(apiData[0].image);
          }}
        />
        <Marker
          width={50}
          anchor={[-12.049232, -75.198148]}
        />
      </Map>

      <div>
        <h1>Leon</h1>
        <span>el león</span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {data && <img src={data} alt="Animal" />}
      </div>
    </div>
  );
}