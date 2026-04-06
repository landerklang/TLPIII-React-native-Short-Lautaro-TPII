import { Navigate, Route, Routes } from "react-router-dom";
import { Homepages } from "../page/Homepages.jsx";
import { CreatedItempages } from "../page/CreatedItempages.jsx";
import { EditItemPage } from "../page/UpdateItempages.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepages />} />
      <Route path="/created" element={<CreatedItempages />} />
      <Route path="/edit/:id" element={<EditItemPage />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
