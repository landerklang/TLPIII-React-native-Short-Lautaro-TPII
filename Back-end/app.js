import { starON } from "./src/config/database.js";
import express from "express";
import { item_router } from "./src/router/item.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
const corsOption = {
  origin: `http://localhost:5173`,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOption));
app.use("/api", item_router);

app.listen(PORT, async () => {
  try {
    await starON();
    console.log(
      `Servidor encendido y escuchando en el https://localhost:${PORT}`,
    );
  } catch (error) {
    console.error("No se pudo iniciar el servidor debido a " + error);
  }
});
