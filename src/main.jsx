import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Avalos from "./pages/avalos";
import Bitacora from "./pages/bitacora";
import Diagrams from "./pages/diagramas";
import Peliculas from "./pages/peliculas/index.jsx";
import Homepage from "./pages/homepage/index.jsx";
import Directores from "./pages/directores/index.jsx";
import Paguaga from "./pages/paguaga";
import NotFound from "./pages/not-found";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/scroll-to-top";
import "animate.css"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {/* Layout is parent route */}
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="avalos" element={<Avalos />} />
        <Route path="bitacora" element={<Bitacora />} />
        <Route path="diagramas" element={<Diagrams />} />
        <Route path="peliculas" element={<Peliculas />} />
        <Route path="directores" element={<Directores />} />
        <Route path="paguaga" element={<Paguaga />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
