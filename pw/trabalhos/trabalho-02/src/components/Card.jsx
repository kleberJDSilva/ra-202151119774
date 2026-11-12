import { Link } from "react-router";
import { useCarrinho } from "../contexts/CarrinhoContext";
function Card({ item }) {
  const { adicionarProduto } = useCarrinho();


  return (
    <article>
      <Link to={`/produtos/${item.id}`}>
          {item.nome}
        </Link>
        
      {item.subtitulo && (
        <h3>{item.subtitulo}</h3>
      )}

      <p>{item.descricao}</p>

      <p>
        R$ {item.preco.toFixed(2)}
      </p>

      {item.selos.map((selo) => (
        <p className="selo" key={selo}>
          {selo}
        </p>
      ))}

      <button onClick={() => adicionarProduto(item)}>
        Adicionar ao carrinho
      </button>
      
    </article>
  );
}

export default Card;