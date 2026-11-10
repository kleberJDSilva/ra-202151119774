import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function Detalhe() {
  const { id } = useParams();

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("/produtos.json")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro " + resposta.status);
        }

        return resposta.json();
      })
      .then((dados) => setProdutos(dados))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>Não foi possível carregar o produto: {erro}</p>;
  }

  const produto = produtos.find(
    (item) => String(item.id) === id
  );

  if (!produto) {
    return (
      <>
        <p>Produto não encontrado.</p>

        <Link to="/cardapio">
          Voltar para o cardápio
        </Link>
      </>
    );
  }

  return (
    <article>
      <h1>{produto.nome}</h1>

      {produto.subtitulo && (
        <h2>{produto.subtitulo}</h2>
      )}

      <p>{produto.descricao}</p>

      <p>
        Preço: R$ {produto.preco.toFixed(2)}
      </p>

      {produto.selos.map((selo) => (
        <p className="selo" key={selo}>
          {selo}
        </p>
      ))}

      <p>
        <Link to="/cardapio">
          Voltar para o cardápio
        </Link>
      </p>
    </article>
  );
}

export default Detalhe;