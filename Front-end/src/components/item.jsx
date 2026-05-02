import { useContext } from "react";
import { FavoritoContext } from "../context/FavoritoProvider.jsx";

function Item({ item }) {
  const { agregarFavorito } = useContext(FavoritoContext);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        agregarFavorito(item);
      }}
    >
      agregar a Favorito
    </button>
  );
}

export default Item;
