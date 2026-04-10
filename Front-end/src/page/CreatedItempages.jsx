import { useForm } from "../hook/Useform";
import { useNavigate } from "react-router-dom";

const Pools = [
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
  "Crane Game",
  "Bomb Bum",
  "Battery Bum",
  "",
];

export const CreatedItempages = () => {
  const { Form, handleChange, handleReset, handleImag } = useForm({
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
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!Fetchitem.ok) {
        return console.log("Error en la fetch");
      }
      const data = await Fetchitem.json();
      console.log(data.Create);
      handleReset();
      navigate("/home");
    } catch (error) {
      console.log("Error interno del servidor " + error);
      console.log(data);
    }
  };

  return (
    <main>
      <div>
        <h1>Crea un objeto</h1>
        <form onSubmit={CreatedItem}>
          <div>
            <input
              type="text"
              name="Name"
              value={Form.Name}
              placeholder="Ingrese el nombre del objeto "
              onChange={handleChange}
            />
            <input
              type="file"
              name="Icon"
              accept="image/*"
              placeholder="haga click en ingrese una imagen"
              onChange={handleImag}
            />
            {Form.Icon && (
              <img
                src={Fomr.Icon}
                alt="preview"
                style={{ width: 64, height: 64, objectFit: "contain" }}
              />
            )}
            <input
              type="radio"
              name="Typeitem"
              value="Active"
              checked={Form.Typeitem === "Active"}
              onChange={handleChange}
            />
            Activo
            <input
              type="radio"
              name="Typeitem"
              value="Passive"
              checked={Form.Typeitem === "Passive"}
              onChange={handleChange}
            />
            Pasivo
            <input
              type="text"
              name="Quote"
              value={Form.Quote}
              placeholder="ingrese una frase que relaciones al objeto"
              onChange={handleChange}
            />
            <input
              type="text"
              name="Description"
              value={Form.Description}
              placeholder="ingrese los atributos que altera el objeto y que hace al jugador"
              onChange={handleChange}
            />
            <label>
              Calidad dle objeto(se indica en numero entre mayor sea el numero
              mas raro es):{Form.Quality}
            </label>
            <input
              name="Quality"
              type="range"
              min="0"
              max="4"
              value={Form.Quality}
              onChange={handleChange}
            />
            <label>Pool(sala donde aparece el objeto):</label>
            <select name="Pool" value={Form.Pool} onChange={handleChange}>
              <option value="">--Seleccionar la Pool</option>
              {Pools.map((pool) => (
                <option key={pool} value={pool}>
                  {pool}
                </option>
              ))}
            </select>
            <label>Interacciones (separada por comas):</label>
            <input
              type="text"
              name="Interactions"
              value={Form.Interactions}
              placeholder="brimstone,ect"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Crear objeto</button>
        </form>
      </div>
    </main>
  );
};
