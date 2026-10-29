import Card from "./Card";

function ListaCards({ itens }) {
  return (
    <div className="produtos">
      {itens.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default ListaCards;