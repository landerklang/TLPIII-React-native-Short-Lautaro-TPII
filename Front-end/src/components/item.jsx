import { useContext } from "react";
import { FavoritoContext } from "../context/FavoritoContext";

function Item({ item }) {
  const { agregarFavorito } = useContext(FavoritoContext);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        agregarFavorito(item);
      }}
    >
      agregar a favoritos
    </button>
  );
}

export default Item;
