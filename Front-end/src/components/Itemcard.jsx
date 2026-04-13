import { useNavigate } from "react-router-dom";
import "../styles/ItemCard.css";

const Quality_Colors = {
  0: "#888888",
  1: "#4caf50",
  2: "#2196f3",
  3: "#9c27b0",
  4: "#ff9800",
};

const Quality_labels = {
  0: "Común",
  1: "Poco común",
  2: "Raro",
  3: "Muy raro",
  4: "Legendario",
};

export const ItemCard = ({ item, mostrarMenu, setMostrarMenu, onDelete }) => {
  const navigate = useNavigate();

  const qualityColor = Quality_Colors[item.Quality] ?? "#888";
  const qualityLabel = Quality_labels[item.Quality] ?? "Desconocido";

  const handleCardClick = (e) => {
    if (e.target.closest(".item-card__menu-wrapper")) return;
    navigate(`/item/${item.id}`);
  };

  return (
    <div
      className="item-card"
      onClick={handleCardClick}
      style={{ borderColor: qualityColor }}
    >
      <div className="item-card__icon">
        {item.Icon ? (
          <img src={item.Icon} alt={item.Name} />
        ) : (
          <span className="item-card__icon-placeholder">
            {item.Name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <div
        className="item-card__quality-bar"
        style={{ backgroundColor: qualityColor }}
        title={`Calidad: ${qualityLabel}`}
      />
      {<h3 className="item-card__name">{item.Name}</h3>}
      {item.Pool && <p className="item-card__pool">📍 {item.Pool}</p>}
      <span
        className={`item-card__type item-card__type--${item.Typeitem?.toLowerCase()}`}
      >
        {item.Typeitem === "Active" ? "⚡ Activo" : "✨ Pasivo"}
      </span>
      <div className="item-card__menu-wrapper">
        <button
          className="item-card__menu-btn"
          onClick={(e) => {
            e.stopPropagation();
            setMostrarMenu(mostrarMenu === item.id ? null : item.id);
          }}
        >
          ⋮
        </button>

        {mostrarMenu === item.id && (
          <div className="item-card__menu-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/edit/${item.id}`);
              }}
            >
              ✏️ Editar
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
              }}
            >
              🗑️ Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
