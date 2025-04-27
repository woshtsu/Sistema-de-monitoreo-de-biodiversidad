import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '../assets/icons/search.svg'
import axios from 'axios';

const SearchComponent = ({ onSelect }) => {

  const [data, setData] = useState([]); // Datos cargados desde la API
  const [query, setQuery] = useState(''); // Valor actual del campo de búsqueda
  const [results, setResults] = useState([]); // Resultados filtrados
  const [selectedIndex, setSelectedIndex] = useState(-1); // Índice de la opción seleccionada
  const [showSuggestions, setShowSuggestions] = useState(false); // Controla si se muestran las sugerencias
  const inputRef = useRef(null); // Referencia al campo de entrada
  const suggestionsRef = useRef(null); // Referencia a la lista de sugerencias

  // Cargar datos al iniciar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.freetestapi.com/api/v1/animals'); // Endpoint para obtener los datos
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Función debounce para retrasar las búsquedas
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = async (value) => {
    if (!value.trim()) {
      setResults([]); // Limpiar resultados si no hay consulta
      return;
    }

    try {
      const response = await axios.get(`https://www.freetestapi.com/api/v1/animals?search=${value}`);
      setResults(response.data); // Actualizar resultados con los datos de la API
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  // Crea una función que obtenga los detalles completos del animal seleccionado:
  const fetchAnimalDetails = async (animalId) => {
    try {
      const response = await axios.get(`https://www.freetestapi.com/api/v1/animals/${animalId}`);
      onSelect(response.data); // Llama al callback con los detalles del animal
    } catch (error) {
      console.error('Error fetching animal details:', error);
    }
  };
  // Aplicar debounce a la función de búsqueda
  const debouncedSearch = debounce(handleSearch, 300); // Retraso de 300ms

  // Manejar cambios en el campo de búsqueda
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value); // Llamar a la función debounce
    setShowSuggestions(true); // Mostrar sugerencias al escribir
  };

  // Manejar eventos de teclado
  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    switch (e.key) {
      case 'ArrowUp':
        // Navegar hacia arriba
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : results.length - 1
        );
        break;
      case 'ArrowDown':
        // Navegar hacia abajo
        setSelectedIndex((prevIndex) =>
          prevIndex < results.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case 'Enter':
        // Seleccionar la opción marcada
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          setQuery(results[selectedIndex].name);
          setShowSuggestions(false); // Ocultar sugerencias después de seleccionar
        }
        break;
      default:
        break;
    }
  };

  // Manejar clics fuera del componente
  const handleClickOutside = (event) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target) &&
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setShowSuggestions(false); // Ocultar sugerencias al hacer clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '500px' }}>
      {/* Campo de búsqueda */}
      <div
        ref={inputRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '50px',
          color: 'gray',
          backgroundColor: '#f9f9f9',
        }}
      >
        <img src={SearchIcon} style={{ width: '60px', height: '20px' }} />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Buscar..."
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: 'black',
            background: 'transparent',
          }}
        />
        <button
          onClick={() => setQuery('')}
          style={{
            padding: '8px',
            border: 'none',
            background: 'transparent',
            color: '#888',
            cursor: 'pointer',
          }}
        >
          Borrar
        </button>
      </div>

      {/* Cuadro de sugerencias */}
      {showSuggestions && query && results.length > 0 && (
        <ul
          ref={suggestionsRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            width: '100%',
            maxHeight: '200px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            background: '#fff',
            zIndex: 10,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {results.map((item, index) => (
            <li
              key={item.id}
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
                ...(selectedIndex === index && {
                  backgroundColor: '#f0f0f0',
                  fontWeight: 'bold',
                }),
              }}
              onClick={() => {
                setQuery(item.name);
                setShowSuggestions(false); // Ocultar sugerencias después de seleccionar
                fetchAnimalDetails(item.id); // Obtener detalles del animal seleccionado
              }}
              onMouseOver={() => setSelectedIndex(index)} // Cambiar selección al pasar el mouse
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;