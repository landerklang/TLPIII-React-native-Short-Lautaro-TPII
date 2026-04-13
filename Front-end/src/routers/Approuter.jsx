import { Navigate, Route, Routes } from "react-router-dom";
import { Homepages } from "../page/Homepages.jsx";
import { CreatedItempages } from "../page/CreatedItempages.jsx";
import { EditItemPage } from "../page/UpdateItempages.jsx";
import { ItemDetailPage } from "../page/ItemDetailPage.jsx";

// NUEVO: se agrega la ruta /item/:id que carga la página de detalle.
// Esta ruta se activa cuando el usuario hace click en una carta del home.
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepages />} />
      <Route path="/created" element={<CreatedItempages />} />
      <Route path="/edit/:id" element={<EditItemPage />} />
      <Route path="/item/:id" element={<ItemDetailPage />} /> {/* NUEVA RUTA */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
