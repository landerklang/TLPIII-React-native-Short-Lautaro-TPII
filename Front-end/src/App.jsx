import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/Approuter.jsx";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
