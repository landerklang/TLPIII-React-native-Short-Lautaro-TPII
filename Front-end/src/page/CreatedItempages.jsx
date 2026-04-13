import { useForm } from "../hook/useform";
import { useNavigate } from "react-router-dom";
import { PoolSelector } from "../components/PoolSelector.jsx";
import "../styles/Forms.css";

export const CreatedItempages = () => {
  const { Form, handleChange, handleReset, handleImag, setForm } = useForm({
    Name: "",
    Icon: "",
    Typeitem: "",
    Quote: "",
    Description: "",
    Quality: 0,
    Pool: "",
    Interactions: "",
  });

  const navigate = useNavigate();

  const handlePoolChange = (poolName) => {
    setForm((prev) => ({ ...prev, Pool: poolName }));
  };

  const CreatedItem = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/item", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(Form),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const err = await res.json();
        console.error("Error del servidor:", err);
        return;
      }
      const data = await res.json();
      console.log("Creado:", data);
      handleReset();
      navigate("/home");
    } catch (error) {
      // CORRECCIÓN: ya no hay console.log(data) en el catch
      console.error("Error:", error);
    }
  };

  return (
    <main className="page">
      <div className="wiki-panel form-container">
        <h1 className="form-title">✦ Crear Objeto ✦</h1>
        <div className="wiki-divider" />

        <form onSubmit={CreatedItem} className="item-form">
          <div className="form-field">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="Name"
              value={Form.Name}
              onChange={handleChange}
              placeholder="Ej: Brimstone"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Ícono</label>
            <p className="form-hint">
              PNG, JPG, GIF o WEBP. La imagen se convierte a base64.
            </p>
            <input
              type="file"
              name="Icon"
              accept="image/png, image/jpeg, image/gif, image/webp"
              onChange={handleImag}
            />
            {Form.Icon && (
              <div className="form-icon-preview">
                <img
                  src={Form.Icon}
                  alt="preview"
                  style={{
                    width: 64,
                    height: 64,
                    objectFit: "contain",
                    imageRendering: "pixelated",
                  }}
                />
                <span className="form-hint">Vista previa ✓</span>
              </div>
            )}
          </div>

          <div className="form-field">
            <label className="form-label">Tipo de objeto</label>
            <div className="form-radio-group">
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="Typeitem"
                  value="Active"
                  checked={Form.Typeitem === "Active"}
                  onChange={handleChange}
                />
                Activo
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="Typeitem"
                  value="Passive"
                  checked={Form.Typeitem === "Passive"}
                  onChange={handleChange}
                />
                Pasivo
              </label>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Cita</label>
            <input
              type="text"
              name="Quote"
              value={Form.Quote}
              onChange={handleChange}
              placeholder='Ej: "It&apos;s super effective!"'
            />
          </div>

          <div className="form-field">
            <label className="form-label">Descripción / Efecto</label>
            <input
              type="text"
              name="Description"
              value={Form.Description}
              onChange={handleChange}
              placeholder="Qué hace el objeto al jugador"
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              Calidad —{" "}
              <span className="form-quality-value">
                {
                  ["Común", "Poco común", "Raro", "Muy raro", "Legendario"][
                    Form.Quality
                  ]
                }
              </span>
            </label>
            <input
              type="range"
              name="Quality"
              min="0"
              max="4"
              value={Form.Quality}
              onChange={handleChange}
              className="form-range"
            />
            <div className="form-range-labels">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>

          <div className="form-field">
            <PoolSelector value={Form.Pool} onChange={handlePoolChange} />
          </div>

          <div className="form-field">
            <label className="form-label">
              Interacciones (separadas por coma)
            </label>
            <p className="form-hint">Objetos con los que tiene sinergia</p>
            <input
              type="text"
              name="Interactions"
              value={Form.Interactions}
              onChange={handleChange}
              placeholder="Ej: Dead Cat, Spoon Bender"
            />
          </div>

          <div className="wiki-divider" />
          <button type="submit" className="btn-primary form-submit">
            ✦ Crear Objeto ✦
          </button>
        </form>
      </div>
    </main>
  );
};
