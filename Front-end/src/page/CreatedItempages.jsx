import { useForm } from "../hook/Useform";
import { useNavigate } from "react-router-dom";

export const CreatedItempages = () => {
  const { Form, handleChange, handleReset, handleImag } = useForm({
    Name: "",
    Icon: "",
    Typeitem: "",
    Quote: "",
    Description: "",
    Quality: 0,
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
              value={Form.value}
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
          </div>
          <button type="submit">Crear objeto</button>
        </form>
      </div>
    </main>
  );
};
