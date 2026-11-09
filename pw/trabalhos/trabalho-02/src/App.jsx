import { Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import ComoPedir from "./pages/ComoPedir";
import Cardapio from "./pages/Cardapio";
import Pedido from "./pages/Pedido";
import Sobre from "./pages/Sobre";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/como-pedir" element={<ComoPedir />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;