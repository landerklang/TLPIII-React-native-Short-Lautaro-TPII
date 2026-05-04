import { createContext, useReducer } from "react";
import {
  FavoritoReduce,
  AgregarFavorito,
  QuitarFavorito,
} from "./FavoritoReducer.jsx";

export const FavoritoContext = createContext();

export function FavoritoProvider({ children }) {
  const [favorito, setfavorito] = useReducer(FavoritoReduce, []);

  function agregarFavorito(item) {
    setfavorito({ type: AgregarFavorito, payload: item });
    console.log([...favorito, item]);
  }

  function quitarFavorito(id) {
    setfavorito({ type: QuitarFavorito, payload: id });
    console.log("se quito:", id);
  }

  return (
    <FavoritoContext.Provider
      value={{ favorito, agregarFavorito, quitarFavorito }}
    >
      {children}
    </FavoritoContext.Provider>
  );
}
