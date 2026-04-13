import { useNavigate } from "react-router-dom";
import { DEFAULT_POOLS } from "./Pools.jsx";
import "../styles/ItemCard.css";

// Mapa de quality a color (usando las variables CSS)
const QUALITY_COLORS = ["#6b6b6b", "#4a7c4e", "#2e5fa3", "#7b3f9e", "#c0622a"];
const QUALITY_LABELS = [
  "Común",
  "Poco común",
  "Raro",
  "Muy raro",
  "Legendario",
];

// Busca el ícono SVG de la pool por nombre
const getPoolIcon = (poolName) => {
  const pool = DEFAULT_POOLS.find(
    (p) => p.name.toLowerCase() === poolName?.toLowerCase(),
  );
  return pool?.icon ?? null;
};

export const ItemCard = ({ item, mostrarMenu, setMostrarMenu, onDelete }) => {
  const navigate = useNavigate();
  const qualityColor = QUALITY_COLORS[item.Quality] ?? "#6b6b6b";
  const qualityLabel = QUALITY_LABELS[item.Quality] ?? "Desconocido";
  const poolIcon = getPoolIcon(item.Pool);

  const handleCardClick = (e) => {
    if (e.target.closest(".item-card__menu-wrapper")) return;
    navigate(`/item/${item.id}`);
  };

  return (
    <div
      className="item-card"
      onClick={handleCardClick}
      style={{ "--quality-color": qualityColor }}
    >
      {/* Barra de calidad superior */}
      <div className="item-card__quality-bar" />

      {/* Ícono del objeto */}
      <div className="item-card__icon">
        {item.Icon ? (
          <img src={item.Icon} alt={item.Name} />
        ) : (
          <span className="item-card__icon-placeholder">
            {item.Name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Nombre */}
      <h3 className="item-card__name">{item.Name}</h3>

      {/* Pool con ícono */}
      {item.Pool && (
        <div className="item-card__pool">
          {poolIcon && <span className="item-card__pool-icon">{poolIcon}</span>}
          <span className="item-card__pool-name">{item.Pool}</span>
        </div>
      )}

      {/* Tipo + Calidad */}
      <div className="item-card__footer">
        <span
          className={`item-card__type item-card__type--${item.Typeitem?.toLowerCase()}`}
        >
          {item.Typeitem === "Active" ? "⚡" : "✨"}
        </span>
        <span className="item-card__quality-dot" title={qualityLabel} />
      </div>

      {/* Menú de 3 puntos */}
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
          <div className="item-card__dropdown">
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
