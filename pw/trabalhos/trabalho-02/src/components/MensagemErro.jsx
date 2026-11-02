function MensagemErro({ mensagem }) {
  return (
    <div className="erro" role="alert">
      <p>Algo deu errado: {mensagem}</p>

      <button onClick={() => window.location.reload()}>
        Tentar de novo
      </button>
    </div>
  );
}

export default MensagemErro;