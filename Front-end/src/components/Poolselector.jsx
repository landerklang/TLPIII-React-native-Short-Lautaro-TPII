import { useState } from "react";
import { DEFAULT_POOLS, CustomPoolIcon, AddIcon } from "./Pools.jsx";
import "../styles/PoolSelector.css";

export const PoolSelector = ({ value, onChange }) => {
  const [customPools, setCustomPools] = useState([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [newPoolName, setNewPoolName] = useState("");

  const allPools = [...DEFAULT_POOLS, ...customPools];

  const handleSelect = (poolName) => {
    onChange(value === poolName ? "" : poolName);
  };

  const handleAddCustomPool = () => {
    const trimmed = newPoolName.trim();
    if (!trimmed) return;
    const alreadyExists = allPools.some(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase(),
    );
    if (alreadyExists) {
      alert("Ya existe una pool con ese nombre");
      return;
    }

    const newPool = {
      id: `custom_${Date.now()}`,
      name: trimmed,
      Icon: CustomPoolIcon,
    };
    setCustomPools((prev) => [...prev, newPool]);
    onChange(trimmed);
    setNewPoolName("");
    setShowCustomForm(false);
  };

  return (
    <div className="pool-selector">
      <span className="pool-selector__label">Pool — sala donde aparece</span>

      <div className="pool-selector__grid">
        {allPools.map(({ id, name, Icon }) => (
          <button
            key={id}
            type="button"
            className={`pool-card ${value === name ? "pool-card--selected" : ""}`}
            onClick={() => handleSelect(name)}
            title={name}
          >
            <div className="pool-card__icon">
              {/* Cada Icon es un componente SVG, se renderiza como elemento */}
              <Icon size={28} />
            </div>
            <span className="pool-card__name">{name}</span>
          </button>
        ))}

        {/* Botón agregar pool personalizada */}
        <button
          type="button"
          className="pool-card pool-card--add"
          onClick={() => setShowCustomForm((v) => !v)}
          title="Agregar pool personalizada"
        >
          <div className="pool-card__icon">
            <AddIcon size={20} />
          </div>
          <span className="pool-card__name">Agregar</span>
        </button>
      </div>

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
              className="pool-btn pool-btn--ok"
              onClick={handleAddCustomPool}
            >
              Confirmar
            </button>
            <button
              type="button"
              className="pool-btn pool-btn--cancel"
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

      {value && (
        <p className="pool-selector__selected">
          ✓ Pool seleccionada: <strong>{value}</strong>
        </p>
      )}
    </div>
  );
};
