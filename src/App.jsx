import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CadastroPage from "../Pages/CadastroPage/CadastroPage";
import EsqueciPage from "../Pages/EsqueciPage/EsqueciPage";
import TodasPage from "../Pages/TodasPage/TodasPage";
import ReservasPage from "../Pages/ReservasPage/ReservasPage";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/esqueci" element={<EsqueciPage />} />
        <Route path="/todas" element={<TodasPage />} />
        <Route path="/reservas" element={<ReservasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
