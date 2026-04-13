import { useForm } from "../hook/useform";
import { href, useNavigate } from "react-router-dom";
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

  const CreatedItem = async (event) => {
    event.preventDefault();
    try {
      const Fetchitem = await fetch("http://localhost:4000/api/item", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(Form),
        headers: { "Content-Type": "application/json" },
      });

      if (!Fetchitem.ok) {
        // CORRECCIÓN: antes había un console.log(data) en el catch
        // pero "data" solo existe dentro del try después del await.
        // En el catch ya no es accesible y lanzaba un ReferenceError encima del error original.
        const err = await Fetchitem.json();
        console.error("Error del servidor:", err);
        return;
      }

      const data = await Fetchitem.json();
      console.log("Item creado:", data);
      handleReset();
      navigate("/home");
    } catch (error) {
      // CORRECCIÓN: removimos el console.log(data) del catch original
      console.error("Error interno del servidor:", error);
    }
  };

  // Handler especial para Pool ya que PoolSelector no usa un evento nativo
  // sino que llama directo con el string del nombre de la pool
  const handlePoolChange = (poolName) => {
    setForm((prev) => ({ ...prev, Pool: poolName }));
  };

  return (
    <main className="page">
      <div className="form-container">
        <h1 className="form-title">✦ Crear Objeto ✦</h1>
        <div className="divider" />

        <form onSubmit={CreatedItem} className="item-form">
          {/* Nombre */}
          <div className="form-field">
            <label className="form-label">Nombre del objeto</label>
            <input
              type="text"
              name="Name"
              value={Form.Name}
              placeholder="Ej: Brimstone"
              onChange={handleChange}
            />
          </div>

          {/* Icono — imagen */}
          <div className="form-field">
            <label className="form-label">Icono del objeto</label>
            <p className="form-hint">
              Formatos soportados: PNG, JPG, GIF, WEBP. La imagen se convierte a
              base64 para guardarse en la base de datos.
            </p>
            <input
              type="file"
              name="Icon"
              accept="image/png, image/jpeg, image/gif, image/webp"
              onChange={handleImag}
            />
            {/* CORRECCIÓN: el código original tenía "Fomr.Icon" (typo).
                Ahora es Form.Icon correctamente. */}
            {Form.Icon && (
              <div className="form-icon-preview">
                <img
                  src={Form.Icon}
                  alt="preview del ícono"
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

          {/* Tipo */}
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
                {
                  <img src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e2/Lil%27_Battery.png/revision/latest?cb=20151115051626" />
                }
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
                ✨ Pasivo
              </label>
            </div>
          </div>

          {/* Quote */}
          <div className="form-field">
            <label className="form-label">Cita del objeto</label>
            <input
              type="text"
              name="Quote"
              value={Form.Quote}
              placeholder={'Ej: "It\'s super effective!"'}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="form-field">
            <label className="form-label">Descripción / Efecto</label>
            <input
              type="text"
              name="Description"
              value={Form.Description}
              placeholder="Qué hace el objeto al jugador"
              onChange={handleChange}
            />
          </div>

          {/* Quality */}
          <div className="form-field">
            <label className="form-label">
              Calidad del objeto —{" "}
              <span className="form-quality-value" data-quality={Form.Quality}>
                {
                  ["Común", "Poco común", "Raro", "Muy raro", "Legendario"][
                    Form.Quality
                  ]
                }
              </span>
            </label>
            <input
              name="Quality"
              type="range"
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

          {/* Pool — selector visual con iconos */}
          <div className="form-field">
            <PoolSelector value={Form.Pool} onChange={handlePoolChange} />
          </div>

          {/* Interactions */}
          <div className="form-field">
            <label className="form-label">
              Interacciones (separadas por coma)
            </label>
            <p className="form-hint">
              Objetos del juego con los que este ítem tiene sinergia
            </p>
            <input
              type="text"
              name="Interactions"
              value={Form.Interactions}
              placeholder="Ej: Dead Cat, Spoon Bender, Cricket's Body"
              onChange={handleChange}
            />
          </div>

          <div className="divider" />
          <button type="submit" className="btn-primary form-submit">
            ✦ Crear Objeto ✦
          </button>
        </form>
      </div>
    </main>
  );
};
