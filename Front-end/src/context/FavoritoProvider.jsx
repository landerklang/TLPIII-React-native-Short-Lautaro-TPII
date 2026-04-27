import { useState } from "react";
import { FavoritoContext } from "./FavoritoContext.jsx";

export function FavoritoProvider({ children }) {
  const [favorito, setfavorito] = useState([]);

  function agregarFavorito(item) {
    setfavorito((favorito) => {
      return [...favorito, item];
    });
    console.log([...favorito, item]);
  }

  return (
    <FavoritoContext.Provider value={{ favorito, agregarFavorito }}>
      {children}
    </FavoritoContext.Provider>
  );
}
