import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Avalos from "./pages/avalos";
import Bitacora from "./pages/bitacora";
import Diagrams from "./pages/diagramas";
import MovieSection from "./pages/seccion-api";
import Homepage from "./pages/homepage/index.jsx";
import SeccionJson from "./pages/seccion-json/index.jsx";
import Paguaga from "./pages/paguaga";
import NotFound from "./pages/not-found"
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/scroll-to-top";

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
        <Route path="seccion-api" element={<MovieSection />} />
        <Route path="seccion-json" element={<SeccionJson />} />
        <Route path="paguaga" element={<Paguaga />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
