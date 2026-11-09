import { useEffect, useState } from "react";
import ListaCards from "../components/ListaCards";
import Carregando from "../components/Carregando";
import MensagemErro from "../components/MensagemErro";

function Cardapio() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("/produtos.json")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("HTTP " + resposta.status);
        }

        return resposta.json();
      })
      .then((dados) => setProdutos(dados))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  if (carregando) {
    return <Carregando texto="Carregando produtos..." />;
  }

  if (erro) {
    return <MensagemErro mensagem={erro} />;
  }

  return (
    <>
      <h1>Cardápio</h1>

      <label htmlFor="busca">Buscar produto:</label>

      <input
        id="busca"
        type="text"
        placeholder="Digite o nome do produto"
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      {produtosFiltrados.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}

      <ListaCards itens={produtosFiltrados} />
    </>
  );
}

export default Cardapio;