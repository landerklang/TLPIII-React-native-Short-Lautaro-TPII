import { createContext, useState } from "react";

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
    setfavorito((prev) => prev.filter((fav) => fav.id !== id));
  }

  return (
    <FavoritoContext.Provider
      value={{ favorito, agregarFavorito, quitarFavorito }}
    >
      {children}
    </FavoritoContext.Provider>
  );
}
