function Card({ item }) {
  return (
    <article>
      <h2>{item.nome}</h2>

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
    </article>
  );
}

export default Card;