import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App.jsx";
import { FavoritoProvider } from "./context/FavoritoProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritoProvider>
  </StrictMode>,
);
