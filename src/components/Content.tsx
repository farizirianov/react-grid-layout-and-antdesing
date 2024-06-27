import Dashboard from '../pages/Dashboard';
import Reportes from "../pages/Reportes"; // Asegúrate de tener un componente About
import { Route, Routes } from "react-router-dom";
import Configuracion from '../pages/Configuracion';

export const Contenido = () => {
  return <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/config" element={<Configuracion />} />
    </Routes>
  </>
}