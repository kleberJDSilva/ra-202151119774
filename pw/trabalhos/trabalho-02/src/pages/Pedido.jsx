import FormularioPedido from "../components/FormularioPedido";

function Pedido() {
  return (
    <>
      <h1>Faça seu pedido</h1>

      <p>
        Preencha os dados abaixo para realizar seu pedido.
        Confira as informações antes de enviar.
      </p>

      <FormularioPedido />
    </>
  );
}

export default Pedido;