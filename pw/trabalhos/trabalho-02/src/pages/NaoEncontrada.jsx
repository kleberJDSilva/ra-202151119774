import { Link } from "react-router";

function NaoEncontrada() {
  return (
    <>
      <h1>Página não encontrada</h1>

      <p>Esse endereço não existe.</p>

      <Link to="/">
        Voltar para o início
      </Link>
    </>
  );
}

export default NaoEncontrada;