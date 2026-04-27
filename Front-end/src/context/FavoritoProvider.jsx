import { useState } from "react";
import { Favoritocontext } from "./FavoritoContext.jsx";

export function FavoritoProvider({ children }) {
  const [favorito, setfavorito] = useState([]);

  function agregarFavorito() {
    setfavorito([...favorito, item]);
  }

  return (
    <Favoritocontext.Provider value={{ favorito, agregarFavorito }}>
      {children}
    </Favoritocontext.Provider>
  );
}
