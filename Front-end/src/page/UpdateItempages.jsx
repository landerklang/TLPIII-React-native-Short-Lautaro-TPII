import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  });

  const loadItem = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        credentials: "include",
      });

      const data = await res.json();

      setForm({
        Name: data.item.Name,
        Icon: data.item.Icon,
        Typeitem: data.item.Typeitem,
        Quote: data.item.Quote,
        Description: data.item.Description,
        Quality: data.item.Quality,
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

        <input
          type="text"
          name="Icon"
          value={form.Icon}
          onChange={handleChange}
          placeholder="Icono"
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

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};
