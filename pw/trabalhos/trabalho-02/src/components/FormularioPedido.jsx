import { useState } from "react";

function FormularioPedido() {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    tipoPedido: "",
    pagamento: "",
    horario: ""
  });

  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  function atualizar(evento) {
    const { name, value } = evento.target;

    setDados({
      ...dados,
      [name]: value
    });
  }

  function enviar(evento) {
    evento.preventDefault();

    if (dados.nome.trim().length < 3) {
      setErro("Digite seu nome completo.");
      return;
    }

    if (dados.telefone.length < 10 || dados.telefone.length > 11) {
      setErro("Digite um telefone com 10 ou 11 números.");
      return;
    }

    if (dados.endereco.trim() === "") {
      setErro("Informe o endereço.");
      return;
    }

    if (dados.tipoPedido === "") {
      setErro("Escolha entre retirada ou entrega.");
      return;
    }

    if (dados.pagamento === "") {
      setErro("Escolha a forma de pagamento.");
      return;
    }

    if (dados.horario === "") {
      setErro("Escolha um horário.");
      return;
    }

    setErro("");
    setEnviado(true);

    console.log("Pedido enviado:", dados);
  }

  if (enviado) {
    return (
      <p>
        Obrigado, {dados.nome}! Seu pedido foi enviado.
      </p>
    );
  }

  return (
    <section id="fazer-pedido">
      <h2>Formulário de pedido</h2>

      <form onSubmit={enviar}>
        <p>
          <label htmlFor="nome">Nome completo:</label>
          <br />

          <input
            type="text"
            id="nome"
            name="nome"
            value={dados.nome}
            onChange={atualizar}
            required
          />
        </p>

        <p>
          <label htmlFor="telefone">Telefone para contato:</label>
          <br />

          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={dados.telefone}
            onChange={atualizar}
            placeholder="Ex.: 31999999999"
            required
          />
        </p>

        <p>
          <label htmlFor="endereco">Endereço:</label>
          <br />

          <input
            type="text"
            id="endereco"
            name="endereco"
            value={dados.endereco}
            onChange={atualizar}
            required
          />
        </p>

        <p>
          <label>Como deseja receber o pedido?</label>
          <br />

          <input
            type="radio"
            id="retirada"
            name="tipoPedido"
            value="retirada"
            checked={dados.tipoPedido === "retirada"}
            onChange={atualizar}
          />

          <label htmlFor="retirada">Retirada na loja</label>

          <br />

          <input
            type="radio"
            id="entrega"
            name="tipoPedido"
            value="entrega"
            checked={dados.tipoPedido === "entrega"}
            onChange={atualizar}
          />

          <label htmlFor="entrega">Entrega</label>
        </p>

        <p>
          <label htmlFor="pagamento">Forma de pagamento:</label>
          <br />

          <select
            id="pagamento"
            name="pagamento"
            value={dados.pagamento}
            onChange={atualizar}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </p>

        <p>
          <label htmlFor="horario">
            Horário da entrega/retirada:
          </label>
          <br />

          <select
            id="horario"
            name="horario"
            value={dados.horario}
            onChange={atualizar}
            required
          >
            <option value="">Selecione um horário</option>
            <option value="09">09h</option>
            <option value="10">10h</option>
            <option value="11">11h</option>
            <option value="12">12h</option>
            <option value="13">13h</option>
            <option value="14">14h</option>
            <option value="15">15h</option>
            <option value="16">16h</option>
          </select>
        </p>

        {erro && (
          <p className="erro">
            {erro}
          </p>
        )}

        <p>
          <button type="submit">
            Enviar pedido
          </button>
        </p>
      </form>
    </section>
  );
}

export default FormularioPedido;