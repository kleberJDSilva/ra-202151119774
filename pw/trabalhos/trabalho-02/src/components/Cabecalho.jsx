import { NavLink } from "react-router";

function Cabecalho() {
  return (
    <>
      <header>
        <p className="site-nome">Padaria Pãozão</p>

        <p className="subtitulo-site">
          Produtos de qualidade feitos na hora certa
        </p>
      </header>

       <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/como-pedir">Como pedir</NavLink>
        <NavLink to="/cardapio">Cardápio</NavLink>
        <NavLink to="/pedido">Fazer pedido</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </>
  );
}

export default Cabecalho;