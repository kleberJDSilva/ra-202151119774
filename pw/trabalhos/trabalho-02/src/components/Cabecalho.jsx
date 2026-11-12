import { NavLink } from "react-router";
import { useCarrinho } from "../contexts/CarrinhoContext";

function Cabecalho() {
  const { carrinho } = useCarrinho();

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
        <NavLink to="/cardapio">Cardápio</NavLink>
        <NavLink to="/pedido">Fazer pedido</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>

      <span>
      Carrinho: {carrinho.length} itens
      </span>
      
    </>
  );
}

export default Cabecalho;