import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const POOLS = [
  "Treasure Room",
  "Devil Room",
  "Angel Room",
  "Secret Room",
  "Shop",
  "Boss Room",
  "Curse Room",
  "Library",
  "Beggar",
  "Golden Chest",
  "Red Chest",
  "Greed Mode",
];
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
    Pools: "",
    Interactions: "",
  });

  const loadItem = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        credentials: "include",
      });

      const data = await res.json();

      setForm({
        Name: data.item.Name,
        Icon: data.item.Icon || "",
        Typeitem: data.item.Typeitem,
        Quote: data.item.Quote,
        Description: data.item.Description,
        Quality: data.item.Quality,
        Pool: data.item.Pool || "",
        Interactions: data.item.Interactions || "",
      });
    } catch (error) {
      console.log("Error al cargar item: " + error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImag = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, Icon: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        return alert("Error al actualizar");
      }

      alert("Objeto actualizado correctamente");
      navigate("/home");
    } catch (error) {
      console.log("Error al actualizar: " + error);
    }
  };

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <div>
      <h1>Editar objeto</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="Name"
          value={form.Name}
          onChange={handleChange}
          placeholder="Nombre"
        />

        {form.Icon && (
          <img
            src={form.Icon}
            alt="icono del objeto"
            style={{ width: 64, height: 64, objectFit: "contain" }}
          />
        )}
        <input
          type="file"
          name="Icon"
          value={form.Icon}
          onChange={handleImag}
        />

        <input
          type="text"
          name="Quote"
          value={form.Quote}
          onChange={handleChange}
          placeholder="Cita"
        />

        <input
          type="text"
          name="Description"
          value={form.Description}
          onChange={handleChange}
          placeholder="Descripción"
        />

        <label>Calidad: {form.Quality}</label>
        <input
          type="range"
          name="Quality"
          min="0"
          max="4"
          value={form.Quality}
          onChange={handleChange}
        />

        <div>
          <input
            type="radio"
            name="Typeitem"
            value="Active"
            checked={form.Typeitem === "Active"}
            onChange={handleChange}
          />
          Activo
          <input
            type="radio"
            name="Typeitem"
            value="Passive"
            checked={form.Typeitem === "Passive"}
            onChange={handleChange}
          />
          Pasivo
        </div>

        <label>Pool:</label>
        <select name="Pool" value={form.Pools} onChange={handleChange}>
          <option value="">-- seleccionar la pool para el objeto --</option>
          {POOLS.map((pool) => (
            <option key={pool} value={pool}>
              {pool}
            </option>
          ))}
        </select>

        <label>interacciones (separado con coma):</label>
        <input
          type="text"
          name="Interactions"
          value={form.Interactions}
          onChange={handleChange}
          placeholder="ej:guppy tail,godhead"
        />

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};
