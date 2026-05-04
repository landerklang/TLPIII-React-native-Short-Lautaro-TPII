export const AgregarFavorito = "AgregarFavorito";
export const QuitarFavorito = "QuitarFavorito";

export const FavoritoReduce = (state, action) => {
  switch (action.type) {
    case AgregarFavorito:
      return [...state, action.payload];

    case QuitarFavorito:
      return state.filter((fav) => fav.id !== action.payload);

    default:
      return state;
  }
};
