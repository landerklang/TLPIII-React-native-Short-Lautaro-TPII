import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_POOLS } from "../components/Pools.jsx";
import "../styles/Itemdetailpages.css";

const QUALITY_COLORS = {
  0: "#888888",
  1: "#4caf50",
  2: "#2196f3",
  3: "#9c27b0",
  4: "#ff9800",
};

const QUALITY_LABELS = {
  0: "★☆☆☆☆ Común",
  1: "★★☆☆☆ Poco común",
  2: "★★★☆☆ Raro",
  3: "★★★★☆ Muy raro",
  4: "★★★★★ Legendario",
};

// NUEVA PÁGINA: ItemDetailPage
// Esta es la vista que se abre al hacer click en una carta del home.
// Muestra toda la información del objeto:
//   - Imagen (icono), ID, Nombre, Quote (en cursiva como el juego),
//   - Descripción, Calidad, Pool, Tipo, e Interacciones como lista de chips.
// También tiene botones para editar y eliminar el objeto desde esta vista.
export const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/item/${id}`, {
          credentials: "include",
        });
        const data = await res.json();
        setItem(data.item);
      } catch (error) {
        console.log("Error al cargar item: " + error);
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("¿Seguro que querés eliminar este objeto?")) return;
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        navigate("/home");
      } else {
        alert("No se pudo eliminar el objeto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <div className="detail-loading">Cargando...</div>;
  if (!item) return <div className="detail-loading">Objeto no encontrado</div>;

  const qualityColor = QUALITY_COLORS[item.Quality] ?? "#888";
  const qualityLabel = QUALITY_LABELS[item.Quality] ?? "Desconocido";

  // Las interacciones se guardan como texto separado por coma.
  // Acá las convertimos en un array para mostrarlas como chips individuales.
  const interactionsList = item.Interactions
    ? item.Interactions.split(",")
        .map((i) => i.trim())
        .filter(Boolean)
    : [];

  const selectedPool = DEFAULT_POOLS.find(
    (pool) =>
      pool.name.toLowerCase() === item.Pool?.toLowerCase() ||
      pool.id.toLowerCase() === item.Pool?.toLowerCase(),
  );

  return (
    <div className="detail-page">
      <button className="detail-back-btn" onClick={() => navigate("/home")}>
        ← Volver
      </button>

      <div className="detail-card" style={{ borderColor: qualityColor }}>
        {/* Barra de calidad */}
        <div
          className="detail-quality-bar"
          style={{ backgroundColor: qualityColor }}
        />

        {/* Cabecera: icono + nombre + ID */}
        <div className="detail-header">
          <div className="detail-icon">
            {item.Icon ? (
              <img
                src={item.Icon}
                alt={item.Name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  imageRendering: "pixelated",
                }}
              />
            ) : (
              <span className="detail-icon-placeholder">
                {item.Name?.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="detail-title-block">
            <p className="detail-id">#{item.id}</p>
            <h1 className="detail-name">{item.Name}</h1>
            {/* Quote en cursiva, como aparece en el juego */}
            <p className="detail-quote">"{item.Quote}"</p>
          </div>
        </div>

        {/* Información del objeto */}
        <div className="detail-body">
          <div className="detail-row">
            <span className="detail-label">Tipo</span>
            <span
              className={`detail-type detail-type--${item.Typeitem?.toLowerCase()}`}
            >
              {item.Typeitem === "Active" ? "⚡ Activo" : "✨ Pasivo"}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Calidad</span>
            <span className="detail-quality" style={{ color: qualityColor }}>
              {qualityLabel}
            </span>
          </div>

          {item.Pool && (
            <div className="detail-row">
              <span className="detail-label">Pool</span>
              <div className="detail-pool">
                {selectedPool?.Icon && <selectedPool.Icon />}
                <span>{item.Pool}</span>
              </div>
            </div>
          )}

          <div className="detail-description">
            <p className="detail-label">Descripción</p>
            <p className="detail-description-text">{item.Description}</p>
          </div>

          {/* Interacciones como chips (tags) */}
          {interactionsList.length > 0 && (
            <div className="detail-interactions">
              <p className="detail-label">Interacciones</p>
              <div className="detail-chips">
                {interactionsList.map((inter, index) => (
                  <span key={index} className="detail-chip">
                    {inter}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Botones de acción */}
        <div className="detail-actions">
          <button
            className="detail-btn detail-btn--edit"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            ✏️ Editar
          </button>
          <button
            className="detail-btn detail-btn--delete"
            onClick={handleDelete}
          >
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
