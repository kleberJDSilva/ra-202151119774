import { Link } from "react-router";

function Inicio() {
  return (
    <section id="inicio">
      <h1>Nossa História</h1>

      <p>
        Onde cada momento começa com um bom café. Tudo começou com um sonho simples:
        oferecer um café fresquinho, produtos quentinhos e aquele sabor especial de
        padaria que faz parte do dia a dia.
      </p>

      <p>
        A Padaria Pãozão nasceu com a proposta de oferecer produtos de qualidade,
        preparados para chegar ao cliente no momento certo.
      </p>

      <p>
        A ideia é garantir que o café chegue quente, o pão de queijo esteja fresco
        e que o cliente não precise esperar ou consumir um produto já frio.
      </p>

      <div className="inicio-conteudo">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
            alt="Café servido em uma mesa"
          />

          <figcaption>
            Um café fresquinho preparado na hora certa.
          </figcaption>
        </figure>

        <aside>
          <h2>Como pedir</h2>

          <ol>
            <li>Escolha os produtos no cardápio.</li>
            <li>Preencha o formulário com os dados do pedido.</li>
            <li>Realize o pagamento.</li>
            <li>Receba o produto em casa ou busque presencialmente.</li>
          </ol>

          <p>
            <Link to="/cardapio">
              Ver cardápio
            </Link>
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Inicio;