import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Avalos from './components/avalos'
import Layout from './components/layout/index.jsx'
import SeccionJson from './components/seccion-json/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Layout is parent route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="avalos" element={<Avalos />} />
        <Route path="seccion-json" element={<SeccionJson />} />
      </Route>
    </Routes>
  </BrowserRouter>
)