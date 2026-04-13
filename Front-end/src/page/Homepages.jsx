import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ItemCard } from "../components/Itemcard.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import "../styles/Homepages.css";

export const Homepages = () => {
  const [Item, setItem] = useState([]);
  const [mostrarMenu, setMostrarMenu] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const handleDeleted = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/item/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) return alert("No se pudo eliminar");
      setItem((prev) => prev.filter((item) => item.id !== id));
      setMostrarMenu(null);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredItems =
    Item?.filter((item) =>
      item.Name.toLowerCase().includes(search.toLowerCase()),
    ) ?? [];

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <main className="page homepage">
      {/* Encabezado */}
      <div className="homepage__header">
        <div>
          <h1>Item Pool Database</h1>
          <p className="homepage__subtitle">
            {Item?.length ?? 0} objetos registrados
          </p>
        </div>
        <Link to="/created">
          <button className="btn-primary">+ Nuevo objeto</button>
        </Link>
      </div>

      <div className="divider" />

      {/* Barra de búsqueda */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Grid de cartas */}
      {loading ? (
        <div className="homepage__loading">Cargando objetos...</div>
      ) : filteredItems.length > 0 ? (
        <div className="homepage__grid">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              mostrarMenu={mostrarMenu}
              setMostrarMenu={setMostrarMenu}
              onDelete={handleDeleted}
            />
          ))}
        </div>
      ) : (
        <div className="homepage__empty">
          <p>No se encontraron objetos</p>
          {search && (
            <p className="homepage__empty-hint">
              Intenta con otro término de búsqueda
            </p>
          )}
        </div>
      )}
    </main>
  );
};
