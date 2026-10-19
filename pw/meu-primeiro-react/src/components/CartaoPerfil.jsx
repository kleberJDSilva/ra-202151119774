
function CartaoPerfil({ nome, curso, emoji, cor }) {
  return (
    <div
      className="cartao"
      style={{ borderColor: cor }}
    >
      <span>{emoji}</span>
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
    </div>
  );
}

export default CartaoPerfil;
