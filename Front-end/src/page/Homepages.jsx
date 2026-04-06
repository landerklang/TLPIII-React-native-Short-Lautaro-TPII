import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Homepages = () => {
  const [Item, setItem] = useState([]);
  const [mostrarMenu, setMostrarMenu] = useState(null);

  const navigate = useNavigate();

  const loadAllData = async () => {
    try {
      const itemfetch = await fetch("http://localhost:4000/api/item", {
        credentials: "include",
      });

      const data = await itemfetch.json();
      setItem(data.allitem);
    } catch (error) {
      console.log("error al cargar la fetch " + error);
    }
  };

  const handleDeleted = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        return alert("No se pudo eliminar el objeto");
      }

      setItem((prev) => prev.filter((item) => item.id !== id));
      setMostrarMenu(null);

      alert("Objeto eliminado correctamente");
    } catch (error) {
      console.log("Error al eliminar: " + error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <main>
      <Link to="/created">
        <button>Crear un objeto</button>
      </Link>

      <div>
        {Item.length > 0 ? (
          Item.map((item) => (
            <div key={item.id}>
              <p>ID: {item.id}</p>
              <p>Nombre: {item.Name}</p>
              <p>Icon: {item.Icon}</p>
              <p>Tipo de objeto: {item.Typeitem}</p>
              <p>Cita: {item.Quote}</p>
              <p>Descripción: {item.Description}</p>
              <p>Calidad: {item.Quality}</p>

              <button
                onClick={() =>
                  setMostrarMenu(mostrarMenu === item.id ? null : item.id)
                }
              >
                ⋮
              </button>

              {mostrarMenu === item.id && (
                <div>
                  <button onClick={() => handleEdit(item.id)}>Editar</button>

                  <button onClick={() => handleDeleted(item.id)}>
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No hay objetos</div>
        )}
      </div>
    </main>
  );
};
