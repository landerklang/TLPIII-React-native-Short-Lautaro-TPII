import { useState } from "react";
import { DEFAULT_POOLS } from "./Pools.jsx";
import "../styles/PoolSelector.css";

// PoolSelector — componente que reemplaza al <select> simple de Pool.
//
// Funcionalidades:
// 1. Muestra todas las pools del juego con su ícono SVG y nombre
// 2. La pool seleccionada se resalta visualmente
// 3. El usuario puede hacer click en "Agregar pool personalizada" para
//    crear una pool nueva que no está en la lista (ej: "The Bible - Angel Room")
// 4. Las pools personalizadas creadas se guardan en el estado local del componente
//    y quedan disponibles durante la sesión
//
// Props:
//   value — el valor actual del campo Pool (string con el nombre de la pool)
//   onChange — función que recibe el nuevo valor (para actualizar el Form)
export const PoolSelector = ({ value, onChange }) => {
  // Estado local para las pools personalizadas que el usuario agrega
  const [customPools, setCustomPools] = useState([]);

  // Estado para el formulario de nueva pool personalizada
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [newPoolName, setNewPoolName] = useState("");

  // Combina las pools del juego con las personalizadas
  const allPools = [...DEFAULT_POOLS, ...customPools];

  const handleSelect = (poolName) => {
    // Si el usuario hace click en la pool ya seleccionada, la deselecciona
    onChange(value === poolName ? "" : poolName);
  };

  const handleAddCustomPool = () => {
    const trimmed = newPoolName.trim();
    if (!trimmed) return;

    // Evitamos duplicados (comparación insensible a mayúsculas)
    const alreadyExists = allPools.some(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase(),
    );
    if (alreadyExists) {
      alert("Ya existe una pool con ese nombre");
      return;
    }

    // Creamos la nueva pool con un ícono genérico (signo de pregunta)
    // El id se genera desde el nombre para que sea único
    const newPool = {
      id: `custom_${trimmed.toLowerCase().replace(/\s+/g, "_")}`,
      name: trimmed,
      // Ícono SVG genérico para pools personalizadas — un rombo morado
      icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4 L28 16 L16 28 L4 16 Z"
            fill="#8e44ad"
            stroke="#6c3483"
            strokeWidth="1.5"
          />
          <text
            x="16"
            y="21"
            textAnchor="middle"
            fill="#fff"
            fontSize="12"
            fontFamily="serif"
            fontWeight="bold"
          >
            ?
          </text>
        </svg>
      ),
    };

    setCustomPools((prev) => [...prev, newPool]);
    // Seleccionamos automáticamente la pool recién creada
    onChange(trimmed);
    setNewPoolName("");
    setShowCustomForm(false);
  };

  return (
    <div className="pool-selector">
      <p className="pool-selector__label">
        Pool (sala donde aparece el objeto)
      </p>

      {/* Grid de pools con iconos */}
      <div className="pool-selector__grid">
        {allPools.map((pool) => (
          <button
            key={pool.id}
            type="button" // importante: evita que el click envíe el formulario
            className={`pool-card ${value === pool.name ? "pool-card--selected" : ""}`}
            onClick={() => handleSelect(pool.name)}
            title={pool.name}
          >
            <div className="pool-card__icon">{pool.icon}</div>
            <span className="pool-card__name">{pool.name}</span>
          </button>
        ))}

        {/* Botón para agregar pool personalizada */}
        <button
          type="button"
          className="pool-card pool-card--add"
          onClick={() => setShowCustomForm((v) => !v)}
          title="Agregar pool personalizada"
        >
          <div className="pool-card__icon">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="12"
                fill="#2a2a3e"
                stroke="#444"
                strokeWidth="1.5"
              />
              <path
                d="M16 10 L16 22 M10 16 L22 16"
                stroke="#888"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="pool-card__name">Agregar</span>
        </button>
      </div>

      {/* Formulario de pool personalizada (se muestra/oculta) */}
      {showCustomForm && (
        <div className="pool-selector__custom-form">
          <input
            type="text"
            value={newPoolName}
            onChange={(e) => setNewPoolName(e.target.value)}
            placeholder="Nombre de la nueva pool (ej: Bible - Angel Room)"
            className="pool-selector__custom-input"
            onKeyDown={(e) => e.key === "Enter" && handleAddCustomPool()}
            autoFocus
          />
          <div className="pool-selector__custom-actions">
            <button
              type="button"
              className="pool-selector__custom-btn pool-selector__custom-btn--confirm"
              onClick={handleAddCustomPool}
            >
              Confirmar
            </button>
            <button
              type="button"
              className="pool-selector__custom-btn pool-selector__custom-btn--cancel"
              onClick={() => {
                setShowCustomForm(false);
                setNewPoolName("");
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Muestra cuál pool está seleccionada actualmente */}
      {value && (
        <p className="pool-selector__selected-info">
          ✓ Seleccionada: <strong>{value}</strong>
        </p>
      )}
    </div>
  );
};
