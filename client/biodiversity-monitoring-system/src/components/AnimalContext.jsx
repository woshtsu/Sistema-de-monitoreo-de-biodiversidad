// AnimalContext.jsx
import React, { createContext, useState } from 'react';

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Estado para el animal seleccionado

  return (
    <AnimalContext.Provider value={{ selectedAnimal, setSelectedAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};