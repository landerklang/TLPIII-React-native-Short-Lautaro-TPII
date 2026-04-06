import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/Approuter.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />;
    </BrowserRouter>
  );
};
