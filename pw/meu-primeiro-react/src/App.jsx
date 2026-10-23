
import CartaoPerfil from "./components/CartaoPerfil";

function App() {
  return (
    <>
      <h1>Minha turma</h1>

      <div className="lista-cartoes">
        <CartaoPerfil nome="Ana" curso="ADS" emoji="🎸" cor="red" />
        <CartaoPerfil nome="Bruno" curso="SI" emoji="⚽" cor="blue" />
        <CartaoPerfil nome="Carla" curso="CC" emoji="🎮" cor="green" />
      </div>
    </>
  );
}

export default App;
