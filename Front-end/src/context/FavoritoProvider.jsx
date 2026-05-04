import { createContext, useReducer } from "react";
import {
  FavoritoReduce,
  AgregarFavorito,
  QuitarFavorito,
} from "./FavoritoReducer.jsx";

export const FavoritoContext = createContext();

export function FavoritoProvider({ children }) {
  const [favorito, setfavorito] = useReducer(FavoritoReduce, []);

  function agregarFavorito(item, nombrePersonalizado) {
    const nuevoItem = {
      ...item,
      nombreGuardado: nombrePersonalizado || item.name,
      originName: item.name,
    };
    setfavorito({ type: AgregarFavorito, payload: nuevoItem });
    console.log([...favorito, item]);
  }

  function editarFavorito(item) {
    setfavorito({ type: QuitarFavorito, payload: item });
  }

  function quitarFavorito(id) {
    setfavorito({ type: QuitarFavorito, payload: id });
    console.log("se quito:", id);
  }

  return (
    <FavoritoContext.Provider
      value={{ favorito, agregarFavorito, quitarFavorito, editarFavorito }}
    >
      {children}
    </FavoritoContext.Provider>
  );
}
