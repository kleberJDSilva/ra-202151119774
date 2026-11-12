import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarProduto(produto) {
    setCarrinho([...carrinho, produto]);
  }

  return (
    <CarrinhoContext
      value={{
        carrinho,
        adicionarProduto,
      }}
    >
      {children}
    </CarrinhoContext>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}