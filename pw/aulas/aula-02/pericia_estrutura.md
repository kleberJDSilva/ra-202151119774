# PERÍCIA DE ESTRUTURA

*O que o HTML diz sobre uma página quando ninguém está olhando a tela*

**Programação Web — Aula 2 de 20 · HTML5 Semântico**

## 🎯 MISSÃO

Duas páginas podem ser idênticas na tela e completamente diferentes por dentro. Sua missão é abrir sites reais e descobrir o que a marcação revela — ou esconde — sobre a estrutura do conteúdo.

- Escolha um site com bastante conteúdo (portal de notícias, blog, site institucional).
- Use a aba Elements do DevTools (F12) e, quando indicado, o painel Accessibility.
- Preencha à mão. Onde houver retângulo em branco, desenhe.
- Não existe gabarito: o que vale é a justificativa que você escreve.

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** Kleber jardim da silva   **Turma:** PW   **Data:** 23 / 08 / 2026

## RODADA 01 — Div soup × semântico

> `Arquivos pagina-a.html e pagina-b.html (ambiente virtual da disciplina)`

Os dois trechos abaixo produzem exatamente a mesma tela. Um deles não diz nada sobre o que é cada parte. Para cada div numerada, escreva o elemento semântico que a substituiria.

```text
<!-- PAGINA A -->                     <!-- PAGINA B -->
<div class="topo">      (1)  header       <header>
  <div class="menu">    (2)  nav             <nav>
<div class="miolo">     (3)  main            <main>
  <div class="post">    (4)  article            <article>
  <div class="lateral"> (5)  aside             <aside>
<div class="rodape">    (6)  footer              <footer>
```

**Sua análise:**

1. As duas páginas renderizam igual. O que exatamente a página B tem que a A não tem?

A página B tem uma organização melhor e uma estrutura semântica.

2. Escolha UMA das div acima e explique como você decidiu qual elemento a substitui.

Div class= "menu". Decidi substituir pois o "menu" tem uma palavra chave que é o significado dele. No caso é o nav.

3. Sobrou algum caso em que o div é a escolha certa? Quando?

Não, pois todos os elementos do caso acima tem o significado na estrutura semântica

## RODADA 02 — O mapa da página

> `Site real → DevTools → aba Elements → colapsar os nós e olhar só o primeiro nível dentro de <body>`

Desenhe no retângulo abaixo onde ficam as grandes regiões da página que você escolheu, escrevendo o nome do elemento que a marca (ou "div" se não houver elemento semântico):

```text
+--------------------------------------------------+
|                                                  |
|          ....................                    |
|          .                  .                    |
|          .                  .                    |
|          ....................                    |
|                                                  |
+--------------------------------------------------+
  site investigado: g1.globo.com
```

**Sua análise:**

1. Quantas regiões você conseguiu identificar sem abrir os nós filhos?

4

2. O site usa elementos semânticos ou div com class? Anote dois nomes de class que você viu.

HEAder main e footer (nÃO ENCONTREI NO g1 E USEI O SITE DO SHOPPING DEL REY)

3. Existe mais de um `<main>` na página? Deveria existir?

Não existe. Só deve existir um main por página

## RODADA 03 — A hierarquia dos títulos

> `Ainda no mesmo site: no Console, digitar $$('h1,h2,h3,h4').map(h => h.tagName + ' ' + h.innerText.slice(0,40))`

Esse comando lista os títulos na ordem em que aparecem no código. Anote os primeiros e procure o problema:

```text
ordem   tag    texto do titulo
-----   ----   ------------------------------------
  1     h3    Horarios de funcionamento
  2     h4    lojas
  3     h1    ops!!!
  4     h2    vitrine
  5     h4    Maiô jeniffer
```

**Sua análise:**

1. Quantos h1 a página tem? Se tem mais de um, qual seria o problema disso?
  
  1

2. Algum nível foi pulado (um h2 seguido direto de um h4)? Anote onde
na ordem 4 para o 5.

3. Lendo só os títulos, você entende de que a página trata? Se não, o que está faltando?

Nao entendo. Está faltando uma ordem.

## RODADA 04 — O alt que ninguém lê (mas alguém ouve)

> `No Console: $$('img').slice(0,3).map(i => i.alt || '(SEM ALT)')`

Um leitor de tela lê o alt em voz alta no lugar da imagem. Anote os três primeiros e classifique cada um:

```text
img 1  alt = _______________________________________
       ( ) descritivo  (x) inutil  ( ) ausente  ( ) vazio proposital

img 2  alt = _______________________________________
       ( ) descritivo  (x) inutil  ( ) ausente  ( ) vazio proposital


```

**Sua análise:**

1. Algum alt era só o nome do arquivo ("banner-2024-final.jpg")? Por que isso é inútil?
sim, porque não descreve o que é a imagem em si, apenas o nome que não significa nada

2. Feche os olhos e imagine ouvir a página. O que você perderia com esses alt?

Não conseguiria entender o que é, já que o alt diz o nome do arquivo (que nao diz nada)

3. Reescreva o pior dos três de forma que descreva a imagem em menos de 12 palavras.
imagem 2: Poderia escrever apenas "Sorteio pais", 

## RODADA 05 — O link fora de contexto

> `No Console: $$('a').slice(0,10).map(a => a.innerText.trim()).filter(t => t)`

Leitores de tela permitem navegar por uma lista só de links, sem o texto ao redor. Anote 3 textos de link e teste se sobrevivem sozinhos:

```text
link 1: "Acessar todos os horários"  faz sentido sozinho? (x)sim ( )nao
link 2: "Mapa Interno"  faz sentido sozinho? (x)sim ( )nao
link 3: "Como Chegar"  faz sentido sozinho? (x)sim ( )nao
```

**Sua análise:**

1. Você encontrou algum "clique aqui", "saiba mais" ou "leia"? Para onde ele levava?
Não

2. Reescreva um desses textos para que ele diga o destino sem depender da frase ao redor.
Acessar todos os horários

3. Algum link abria em nova aba? Como você descobriu isso olhando o código?
Sim, não descobri olhando o código, apenas por intuição iria abrir os horários em outra aba

## 🏆 DESAFIO BÔNUS

Terminou antes do tempo? Escolha um destes:

- Rode a auditoria Accessibility do Lighthouse (DevTools → Lighthouse) no site que você investigou. Qual foi a nota e qual o primeiro problema apontado?
- Procure na página um texto que PARECE título (grande e em negrito) mas não é um h. Como você confirmou?
- Encontre um site que use `<table>` para fazer layout em vez de dados tabulares. Por que isso é um problema de acessibilidade?