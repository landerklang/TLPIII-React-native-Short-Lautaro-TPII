import { useContext } from "react";
import { FavoritoContext } from "../context/FavoritoProvider.jsx";

export function Añadirfavorito({ item }) {
  const { agregarFavorito } = useContext(FavoritoContext);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        agregarFavorito(item);
      }}
    >
      Agregar a Favorito
    </button>
  );
}
export function 
