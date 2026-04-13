import { useNavigate } from "react-router-dom";
import { DEFAULT_POOLS } from "./pools.jsx";
import { ActiveIcon, PassiveIcon } from "./Isaacicons.jsx";
import "../styles/ItemCard.css";

// Colores de calidad del juego
const Q_COLORS = ["#888", "#5a9e5a", "#4a7abf", "#9b5abf", "#bf6020"];
const Q_LABELS = ["Común", "Poco común", "Raro", "Muy raro", "Legendario"];

// Busca el componente ícono de la pool por nombre
const getPoolIcon = (poolName) => {
  const p = DEFAULT_POOLS.find(
    (pool) => pool.name.toLowerCase() === poolName?.toLowerCase(),
  );
  return p ? p.Icon : null;
};

export const ItemCard = ({ item, mostrarMenu, setMostrarMenu, onDelete }) => {
  const navigate = useNavigate();
  const qColor = Q_COLORS[item.Quality] ?? "#888";
  const qLabel = Q_LABELS[item.Quality] ?? "?";
  const PoolIcon = getPoolIcon(item.Pool);

  const handleClick = (e) => {
    if (e.target.closest(".item-card__menu-wrapper")) return;
    navigate(`/item/${item.id}`);
  };

  return (
    <div
      className="item-card"
      onClick={handleClick}
      style={{ "--qcolor": qColor }}
    >
      {/* Barra de calidad */}
      <div className="item-card__qbar" />

      {/* Ícono del objeto */}
      <div className="item-card__icon">
        {item.Icon ? (
          <img src={item.Icon} alt={item.Name} />
        ) : (
          <span className="item-card__initial">
            {item.Name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Nombre */}
      <h3 className="item-card__name">{item.Name}</h3>

      {/* Pool con ícono pixel art */}
      {item.Pool && (
        <div className="item-card__pool">
          {PoolIcon && <PoolIcon size={16} />}
          <span>{item.Pool}</span>
        </div>
      )}

      {/* Footer — tipo con ícono pixel art + punto de calidad */}
      <div className="item-card__footer">
        {/* CAMBIO: en vez de emojis ⚡/✨ usamos los íconos SVG del juego */}
        <div className="item-card__type-icon" title={item.Typeitem}>
          {item.Typeitem === "Active" ? (
            <ActiveIcon size={18} />
          ) : (
            <PassiveIcon size={18} />
          )}
        </div>
        <span className="item-card__qdot" title={qLabel} />
      </div>

      {/* Menú */}
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
              Editar
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
              }}
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
