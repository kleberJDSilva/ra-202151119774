import { useState } from "react";
import produtos from "./dados/produtos";
import Cabecalho from "./components/Cabecalho";
import ListaCards from "./components/ListaCards";
import Rodape from "./components/Rodape";

function App() {

  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
  produto.nome.toLowerCase().includes(busca.toLowerCase())
);
 

  return (
    <>
      <Cabecalho />

      <div className="conteudo">
        <main>
          <section id="inicio">
            <h1>Nossa História</h1>

            <p>
              Onde cada momento começa com um bom café. Tudo começou com um sonho simples:
              oferecer um café <strong>fresquinho</strong>, produtos quentinhos e aquele sabor
              especial de padaria que faz parte do dia a dia.
            </p>

            <p>
              Ao longo do tempo, percebemos que não bastava apenas preparar bons produtos.
              Queríamos garantir que cada cliente recebesse seu pedido no momento certo,
              aproveitando o café quente, o pão de queijo recém-saído do forno e os salgados
              sempre fresquinhos.
            </p>

            <p>
              Foi pensando nisso que buscamos melhorar nossa forma de preparar e entregar
              os pedidos. Hoje, cada detalhe é pensado para que você não precise esperar
              demais e, principalmente, para que nunca tenha que comer seu café ou seu
              lanche <em>frio</em>.
            </p>

            <p>
              Porque para nós, qualidade também significa servir no momento certo. ☕🥖
            </p>

            <figure>
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                alt="Café quente servido em uma cafeteria"
              />

              <figcaption>
                Um café fresquinho preparado na hora certa.
              </figcaption>
            </figure>
          </section>

          <section id="cardapio">
            <h2>Cardápio</h2>

            <label htmlFor="busca">
             Buscar produto:
            </label>

            <input
            type="text"
            id="busca"
            placeholder="Digite o nome do produto"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            />

            <p>
              {produtosFiltrados.length} de {produtos.length} produtos
            </p>

            {produtosFiltrados.length === 0 && (
              <p>Nenhum produto encontrado.</p>
            )}

            <ListaCards itens={produtosFiltrados} />
          </section>

          <section id="missão">
            <h2>Nossa Missão</h2>

            <p>
              <strong>Proporcionar momentos de prazer e bem-estar</strong> através de
              produtos de qualidade, feitos na hora certa.
            </p>
          </section>

          <section id="visão">
            <h2>Nossa Visão</h2>

            <p>
              Ser reconhecida como a melhor padaria da cidade, oferecendo produtos de
              qualidade, frescos e saborosos, preparados <em>na hora certa</em>.
            </p>
          </section>

          <section id="valores">
            <h2>Nossos Valores</h2>

            <p>
              Compromisso com a qualidade, transparência e excelência no atendimento.
            </p>
          </section>

          <section id="como-pedir">
            <h2>Como pedir</h2>

            <ol>
              <li>Escolha os produtos e envie o formulário.</li>
              <li>Realize o pagamento.</li>
              <li>Receba o produto em casa ou busque presencialmente.</li>
            </ol>
          </section>
        </main>

        <aside>
          <h2>Não encontrou seu produto preferido em nosso cardápio?</h2>

          <p>
            Envie uma solicitação que podemos incluir no cardápio.
          </p>

          <h2>Horário</h2>

          <p>Seg a sex, 9h às 17h</p>
        </aside>
      </div>

      <Rodape />
    </>
  );
}

export default App;