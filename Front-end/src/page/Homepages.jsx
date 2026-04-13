import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ItemCard } from "../components/Itemcard.jsx";
import { SearchBar } from "../components/SearchBar";

export const Homepages = () => {
  const [Item, setItem] = useState([]);
  const [mostrarMenu, setMostrarMenu] = useState(null);
  const [search, setSearch] = useState("");

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
        return alert("No se pudo eliminar");
      }

      setItem((prev) => prev.filter((item) => item.id !== id));
      setMostrarMenu(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const filteredItems = Item.filter((item) =>
    item.Name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <main>
      <Link to="/created">
        <button>Crear un objeto</button>
      </Link>

      <SearchBar search={search} setSearch={setSearch} />

      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              mostrarMenu={mostrarMenu}
              setMostrarMenu={setMostrarMenu}
              onDelete={handleDeleted}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div>No hay objetos</div>
        )}
      </div>
    </main>
  );
};
