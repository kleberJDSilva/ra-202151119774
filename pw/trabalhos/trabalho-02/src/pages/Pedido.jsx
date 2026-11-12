import FormularioPedido from "../components/FormularioPedido";
import { useCarrinho } from "../contexts/CarrinhoContext";

function Pedido() {
  const { carrinho } = useCarrinho();

  return (
    <>
      <h1>Faça seu pedido</h1>
      
     <h2>Seu carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((produto, indice) => (
          <article key={indice}>
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
          </article>
        ))
      )}
      <p>
        Preencha os dados abaixo para realizar seu pedido.
        Confira as informações antes de enviar.
      </p>

      <FormularioPedido />
    </>
  );
}

export default Pedido;