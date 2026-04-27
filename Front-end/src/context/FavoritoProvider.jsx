import { createContext, useState } from "react";
import { FavoritoContext } from "./FavoritoContext.jsx";

export const FavoritoContext = createContext;

export function FavoritoProvider({ children }) {
  const [favorito, setfavorito] = useState([]);

  function agregarFavorito(item) {
    setfavorito((favorito) => {
      return [...favorito, item];
    });
    console.log([...favorito, item]);
  }

  function quitarFavorito(id) {
    setfavorito(favorito.filter((fav) => fav.id !== id));
  }

  return (
    <FavoritoContext.Provider
      value={{ favorito, agregarFavorito, quitarFavorito }}
    >
      {children}
    </FavoritoContext.Provider>
  );
}
