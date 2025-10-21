import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Avalos from "./components/avalos";
import Bitacora from "./components/bitacora";
import Diagrams from "./components/diagramas";
import MovieSection from "./components/seccion-api";
import Homepage from "./components/homepage/index.jsx";
import SeccionJson from "./components/seccion-json/index.jsx";
import Paguaga from "./components/paguaga";
import Sanchez from "./components/sanchez";
import NotFound from "./components/not-found";
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
        <Route path="sanchez" element={<Sanchez />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
