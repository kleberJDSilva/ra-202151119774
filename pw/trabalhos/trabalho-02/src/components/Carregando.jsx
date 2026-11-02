function Carregando({ texto }) {
  return (
    <p className="carregando">
      {texto || "Carregando..."}
    </p>
  );
}

export default Carregando;