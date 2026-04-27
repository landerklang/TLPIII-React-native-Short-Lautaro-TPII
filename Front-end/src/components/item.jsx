import { useContext } from "react";
import { Favoritocontext } from "../context/FavoritoContext";

function item({ item }) {
  const { agregarFavorito } = useContext(Favoritocontext);
  return (
    <button onClick={() => agregarFavorito(item)}>agregar a favoritos</button>
  );
}

export default item;
