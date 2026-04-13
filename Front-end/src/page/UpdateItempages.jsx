import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PoolSelector } from "../components/PoolSelector.jsx";
import "../styles/Forms.css";

export const EditItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Name: "",
    Icon: "",
    Typeitem: "",
    Quote: "",
    Description: "",
    Quality: 0,
    Pool: "", // BUG CORREGIDO: antes el estado se llamaba "Pools" (con S)
    Interactions: "",
  });

  const loadItem = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        credentials: "include",
      });
      const data = await res.json();

      setForm({
        Name: data.item.Name ?? "",
        Icon: data.item.Icon ?? "",
        Typeitem: data.item.Typeitem ?? "",
        Quote: data.item.Quote ?? "",
        Description: data.item.Description ?? "",
        Quality: data.item.Quality ?? 0,
        Pool: data.item.Pool ?? "", // con la clave correcta "Pool"
        Interactions: data.item.Interactions ?? "",
      });
    } catch (error) {
      console.error("Error al cargar item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // CORRECCIÓN: mismo fix que en CreatedItempages — usamos FileReader/base64
  // para que la imagen se pueda guardar en la BD y mostrarse después.
  const handleImag = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, Icon: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Handler para el PoolSelector (recibe string directo, no evento)
  const handlePoolChange = (poolName) => {
    setForm((prev) => ({ ...prev, Pool: poolName }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      if (!res.ok) return alert("Error al actualizar");
      alert("Objeto actualizado correctamente");
      navigate("/home");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <main className="page">
      <div className="form-container">
        <h1 className="form-title">✦ Editar Objeto ✦</h1>
        <div className="wiki-divider" />

        <form onSubmit={handleUpdate} className="item-form">
          {/* Nombre */}
          <div className="form-field">
            <label className="form-label">Nombre del objeto</label>
            <input
              type="text"
              name="Name"
              value={form.Name}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </div>

          {/* Ícono */}
          <div className="form-field">
            <label className="form-label">Ícono del objeto</label>
            <p className="form-hint">
              PNG, JPG, GIF o WEBP. Se convierte a base64 automáticamente.
            </p>

            {/* Mostramos la imagen actual si existe */}
            {form.Icon && (
              <div className="form-icon-preview">
                <img
                  src={form.Icon}
                  alt="ícono actual"
                  style={{
                    width: 64,
                    height: 64,
                    objectFit: "contain",
                    imageRendering: "pixelated",
                  }}
                />
                <span className="form-hint">
                  Imagen actual — seleccioná un archivo para cambiarla
                </span>
              </div>
            )}

            {/* BUG CORREGIDO #1: el input file NO debe tener value={form.Icon}
                Los inputs file son "uncontrolled" en React — si le ponés value, 
                React tira un error y el input queda bloqueado (no se puede usar).
                La solución es simplemente NO poner el atributo value. */}
            <input
              type="file"
              name="Icon"
              accept="image/png, image/jpeg, image/gif, image/webp"
              onChange={handleImag}
              /* NO hay value aquí — eso estaba rompiendo el input */
            />
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
                  checked={form.Typeitem === "Active"}
                  onChange={handleChange}
                />
                Activo
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="Typeitem"
                  value="Passive"
                  checked={form.Typeitem === "Passive"}
                  onChange={handleChange}
                />
                Pasivo
              </label>
            </div>
          </div>

          {/* Quote */}
          <div className="form-field">
            <label className="form-label">Cita del objeto</label>
            <input
              type="text"
              name="Quote"
              value={form.Quote}
              onChange={handleChange}
              placeholder="Cita"
            />
          </div>

          {/* Description */}
          <div className="form-field">
            <label className="form-label">Descripción / Efecto</label>
            <input
              type="text"
              name="Description"
              value={form.Description}
              onChange={handleChange}
              placeholder="Descripción"
            />
          </div>

          {/* Quality */}
          <div className="form-field">
            <label className="form-label">
              Calidad —{" "}
              <span className="form-quality-value">
                {
                  ["Común", "Poco común", "Raro", "Muy raro", "Legendario"][
                    form.Quality
                  ]
                }
              </span>
            </label>
            <input
              type="range"
              name="Quality"
              min="0"
              max="4"
              value={form.Quality}
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

          {/* Pool — selector visual */}
          {/* BUG CORREGIDO #2: antes el select usaba value={form.Pools} (con S)
              pero el estado se llama "Pool" (sin S). Eso hacía que el select
              siempre apareciera en blanco aunque el objeto tuviera pool asignada.
              Ahora usamos el PoolSelector que lee de form.Pool correctamente. */}
          <div className="form-field">
            <PoolSelector value={form.Pool} onChange={handlePoolChange} />
          </div>

          {/* Interactions */}
          <div className="form-field">
            <label className="form-label">
              Interacciones (separadas por coma)
            </label>
            <input
              type="text"
              name="Interactions"
              value={form.Interactions}
              onChange={handleChange}
              placeholder="ej: Guppy's Tail, Godhead"
            />
          </div>

          <div className="wiki-divider" />
          <button type="submit" className="btn-primary form-submit">
            ✦ Guardar Cambios ✦
          </button>
        </form>
      </div>
    </main>
  );
};
