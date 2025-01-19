//import logo from './logo.svg';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import { useState } from "react";
import SignUp from "./scenes/login";
import AdminDashboard from "./scenes/Principal";
import FaberCastellGrid from "./scenes/marcas/fabercastell";
import Presupuesto from "./scenes/categorias/presupuesto";
import Alpha from "./scenes/marcas/alpha";
import Artesco from "./scenes/marcas/artesco";
import ArtiCreativo from "./scenes/marcas/articreativo";
import Layconsa from "./scenes/marcas/layconsa";
import Standford from "./scenes/marcas/standford";
import Cuadernos from "./scenes/marcas/cuaderno";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/admin/*" element={<AuthenticatedRoutes/>} />
    </Routes>
  );
  
}

function AuthenticatedRoutes() {
  const [theme, colorMode] = useMode();
  const [setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar IsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={ <AdminDashboard/>} />
              <Route path="/faber-castell" element={ <FaberCastellGrid/>} />
              <Route path="/alpha" element={ <Alpha/>} />
              <Route path="/artesco" element={ <Artesco/>} />
              <Route path="/arti-creativo" element={ <ArtiCreativo/>} />
              <Route path="/layconsa" element={ <Layconsa/>} />
              <Route path="/standford" element={ <Standford/>} />
              <Route path="/presupuesto" element={ <Presupuesto/>} />
              <Route path="/cuadernos" element={ <Cuadernos/>} />
              {/* Agrega otras rutas del dashboard aquí */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );}

export default App;
