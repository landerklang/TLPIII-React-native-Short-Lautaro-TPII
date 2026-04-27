import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.jsx";
import { FavoritoProvider } from "./context/favoritoProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritoProvider>
      <App />
    </FavoritoProvider>
  </StrictMode>,
);
