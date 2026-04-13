import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "../components/Itemcard.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import "../styles/Homepage.css";

export const Homepages = () => {
  const [Item, setItem] = useState([]);
  const [mostrarMenu, setMostrarMenu] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadAllData = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/item", {
        credentials: "include",
      });
      const data = await res.json();
      setItem(data.allitem ?? []);
    } catch (err) {
      console.error("Error al cargar items:", err);
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
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = Item.filter((item) =>
    item.Name?.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <div className="page homepage">
      {/* Cabecera wiki — logo + título + botón */}
      <header className="wiki-panel homepage__header">
        <div className="homepage__title-block">
          {/* Título estilo wiki con la fuente Cinzel */}
          <h1>Item Database</h1>
          <p className="homepage__subtitle">
            The Binding of Isaac: Rebirth — {Item.length} objetos registrados
          </p>
        </div>
        <Link to="/created">
          <button className="btn-primary">+ Añadir objeto</button>
        </Link>
      </header>

      <div className="wiki-divider" style={{ margin: "14px 0" }} />

      {/* Panel de búsqueda */}
      <div className="wiki-panel homepage__search-panel">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="wiki-divider" style={{ margin: "14px 0" }} />

      {/* Contenido */}
      <div className="wiki-panel homepage__content">
        {loading ? (
          <div className="homepage__state">Cargando objetos...</div>
        ) : filtered.length > 0 ? (
          <div className="homepage__grid">
            {filtered.map((item) => (
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
          <div className="homepage__state">
            <p>No se encontraron objetos.</p>
            {search && (
              <p className="homepage__state-hint">
                Probá con otro término de búsqueda.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
