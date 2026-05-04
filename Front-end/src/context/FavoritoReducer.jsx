export const AgregarFavorito = "AgregarFavorito";
export const QuitarFavorito = "QuitarFavorito";

export const FavoritoReduce = (state, action) => {
  switch (action.type) {
    case AgregarFavorito:
      return [...state, action.payload];

    case QuitarFavorito:
      return state.filter((fav) => fav.id !== action.payload);

    case EditarFavorito:
      return state.map((item) => {
        item.id === action.payload.id ? { ...item, ...action.payload } : item;
      });

    default:
      return state;
  }
};
