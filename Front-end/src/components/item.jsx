import { useContext } from "react";
import { FavoritoContext } from "../context/FavoritoProvider.jsx";

export function MiComponente() {
  const { favorito, agregarFavorito, quitarFavorito } =
    useContext(FavoritoContext);

  const handleQuitar = (id) => {
    quitarFavorito(id); // Así se usa, igual que antes
  };

  return (
    <quitarFavorito>
      {favorito.map((item) => (
        <button key={item.id} onChange={() => quitarFavorito(item.id)}>
          <h1>Quitar {item.nombre}</h1>
        </button>
      ))}
    </quitarFavorito>
  );
}
