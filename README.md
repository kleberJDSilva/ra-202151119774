# RA 20215119774 — Kleber Jardim Da Silva

Repositório de exercícios práticos das disciplinas cursadas em **2026.2**.

- Curso: <Programação WEB>
- Professor: Thalles Noce

## Disciplinas

| Pasta | Disciplina |
|---|---|
| `pw/`  | Programação Web |

Em cada disciplina:

- `aulas/` — exercícios práticos realizados em aula.
- `trabalhos/` — trabalhos e entregas avaliativas.

## Origem dos dados

Os produtos vêm de pw/trabalhos/trabalho-02/public/produtos.json, carregado com fetch dentro de um useEffect em src/pages/Cardapio.jsx

Enquanto os dados carregam, a tela mostra "Carregando produtos...".

Se o arquivo não carregar, aparece uma mensagem de erro no lugar da lista e o site não quebra.

Se não houver produtos, a tela informa que nenhum produto foi encontrado.


## Context

- **Qual:** CarrinhoContext (`pw/trabalhos/trabalho-02/src/contexts/CarrinhoContext.jsx`)
- **O que guarda:** os produtos adicionados ao carrinho e a função para adicionar novos produtos.
- **Por que Context e não props:** o carrinho é usado por componentes distantes, como `Card`, `Cabecalho` e `Pedido`. Se fosse passado por props, o dado teria que atravessar componentes intermediários que não precisam usá-lo.