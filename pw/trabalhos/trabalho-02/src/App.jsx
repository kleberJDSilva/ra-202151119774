import { Routes, Route } from "react-router";
import Detalhe from "./pages/Detalhe";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Cardapio from "./pages/Cardapio";
import Pedido from "./pages/Pedido";
import Sobre from "./pages/Sobre";
import NaoEncontrada from "./pages/NaoEncontrada";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";

function App() {
  return (
    <CarrinhoProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/sobre" element={<Sobre />} />
        
        
        <Route 
          path="/produtos/:id" 
          element={<Detalhe />}/>


        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
      </CarrinhoProvider>
  );
}

export default App;