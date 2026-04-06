import { useEffect, useState } from "react";

export const Homepages = () => {
  const [Item, setItem] = useState([]);

  const loadAllData = async () => {
    try {
      const itemfetch = await fetch("http://localhost:4000/api/item", {
        credentials: "include",
      });
      const data = await itemfetch.json();
      console.log(data.allitem);
      setItem(data.allitem);
    } catch (error) {
      console.log(`error al carga la fetch ` + error);
    }
  };
  useEffect(() => {
    loadAllData();
  }, []);
  return (
    <div>
      {Item.length > 0 ? (
        Item.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <p>ID:{item.id}</p>
                <p>Nombre:{item.Name}</p>
                <p>Icon:{item.Icon}</p>
                <p>Tipo de objeto:{item.Typeitem}</p>
                <p>Cita:{item.Quote}</p>
                <p>Descripcion:{item.Description}</p>
                <p>Calidad:{item.Quality}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div>no hay objetos</div>
      )}
    </div>
  );
};
