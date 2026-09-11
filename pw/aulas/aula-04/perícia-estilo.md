# PERÍCIA DE ESTILO

*Como o navegador decide qual regra CSS ganha — e ele mostra isso de graça*

**Programação Web — Aula 4 de 20 · CSS: Seletores, Cascata e Box Model**

## 🎯 MISSÃO

O navegador não esconde nada: ele mostra quais regras aplicou, quais descartou e de onde veio cada valor final. Sua missão é aprender a ler esse relatório e, a partir dele, deduzir as regras do jogo.

- Escolha um site com visual elaborado (portal de notícias, loja, site institucional).
- Trabalhe na aba Elements do DevTools (F12): painéis Styles e Computed.
- Na Rodada 3, use o arquivo especificidade-quiz.html disponibilizado pelo professor.
- Notação de especificidade a usar: (id, classe, elemento). Ex.: #nav .item a = (1, 1, 1).

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** Kleber jardim da silva  **Turma:** pw  **Data:** 04/09/2026

## RODADA 01 — As regras que valem e as que morreram

> `Site real → botão direito num título → Inspecionar → painel Styles (lado direito)`

O painel Styles lista TODAS as regras que miram aquele elemento, da mais forte para a mais fraca. As que perderam aparecem riscadas. Catalogue o que você vê:

```text
elemento inspecionado: <body class=" vs-home"

regras que VALEM (nao riscadas):
  1. seletor: body propriedade: font-family: system-ui, Segoe UI, Arial, sans-serif
  2. seletor: body  propriedade: background: #f5f7fa

regras RISCADAS (perderam):
  1. seletor: body.vs-home propriedade: body.vs-home

**Sua análise:**

1. Quantas regras diferentes tentavam estilizar esse único elemento?
3 regras diferentes tentavam estilizar o elemento. 

2. Escolha uma regra riscada: por que você acha que ela perdeu?
A regra perdeu porque outra regra tinha maior prioridade na cascata do CSS. Nesse caso, a especificidade e a ordem das declarações fizeram com que outra regra fosse aplicada.

3. Existe alguma declaração com !important? Onde?
Não. Não encontrei nenhuma declaração com !important no elemento analisado.

## RODADA 02 — De onde veio esse valor?

> `Mesmo elemento → painel Computed → clicar na setinha ao lado de uma propriedade`

O painel Computed mostra o valor FINAL de cada propriedade — inclusive de coisas que ninguém declarou. Investigue quatro delas:

```text
propriedade      valor final        veio de qual seletor?
--------------   ----------------   ----------------------
color            rgb(30, 41, 59)  body
font-size        16px               body
display           block             user agent stylesheet
margin-top        0px               body
```

**Sua análise:**

1. Alguma dessas propriedades tinha valor sem ninguém ter declarado nada? De onde ele veio?

Sim. A propriedade display apresentou um valor padrão definido pelo navegador. Esses valores fazem parte do estilo padrão do navegador (user agent stylesheet).

2. O valor de font-size aparece em px mesmo se o CSS usou outra unidade. Por que?

Porque o painel Computed mostra o valor final calculado pelo navegador. Mesmo que o CSS use rem, em ou outra unidade, o navegador calcula o tamanho correspondente em pixels.

3. Qual propriedade dessa lista foi HERDADA do elemento pai?

A propriedade color pode ser herdada do elemento pai quando não existe uma declaração específica para o elemento.

## RODADA 03 — Quem ganha — agora com a conta feita

> `Abrir especificidade-quiz.html e inspecionar o parágrafo de cada caixa`

Volte ao quiz do início da aula. Agora não é para adivinhar: conte os id, as classes e os elementos de cada seletor e escreva a soma antes de conferir no DevTools.

```text
cx  seletor vencedor                          especificidade                cor final
--  --------------------------                  --------------                 ---------
 1  #alvo1                                    (1 , 0, 0)                      vermelho
 2  #c2 p                                     (1 , 0 , 1)                      vermelho
 3  .empate (segunda declaração)              (0 , 1 , 0)                       verde
 4  style="color: #c0392b"                  (1 , 0 , 0, 0)                    vermelho
 5  #alvo5 { color: #27ae60 !important; }   (1 , 0 , 0 + !important)           verde
 6  .a6.b6                                    (0 , 2 , 0)                       verde
 7  #c7 (herança)                             (1, 0 , 0)                        verdee
 8 .card8 .destaque8 span                      (0 , 2 , 1)                      vermelho

**Sua análise:**

1. Na caixa 2, por que a regra com class perdeu para a regra com id + elemento?
A regra .verde2 possui especificidade (0, 1, 0), enquanto #c2 p possui (1, 0, 1). Como um ID tem um peso maior que uma classe, #c2 p vence e a cor final fica vermelha.

2. Nas caixas 3, o que decidiu o resultado, se a especificidade era igual nas duas regras?

As duas regras possuem a mesma especificidade (0, 1, 0). Por isso, a regra declarada por último vence. Nesse caso, a segunda .empate define a cor verde.

3. Na caixa 7 nenhuma regra mirava o parágrafo. Então de onde veio a cor dele?

A cor veio por herança do elemento pai #c7. Como a propriedade color é herdável e não existe uma cor definida diretamente no <p>, ele recebeu a cor verde do pai.

## RODADA 04 — A caixa é maior do que você pediu

> `Site real → inspecionar um card ou botão → rolar o painel Styles até o fim → diagrama colorido do box model`

Todo elemento é uma caixa com quatro camadas. O diagrama do DevTools mostra as quatro. Anote as medidas e faça a conta à mão:

```text
                +---------------------------+
     margin     |  16 px                  |
                |  +---------------------+  |
     border     |  |  1 px            |  |
                |  |  +---------------+  |  |
     padding    |  |  |  18 px      |  |  |
                |  |  |  +---------+  |  |  |
     content    |  |  |  | 300 x 100 |  |  |  |
                |  |  |  +---------+  |  |  |

largura total ocupada = content + padding*2 + border*2 + margin*2
                      = 370 px
```

**Sua análise:**

1. Qual camada empurra os elementos vizinhos para longe, sem pintar nada?

A camada que empurra os elementos vizinhos é a margem (margin). Ela fica do lado de fora da borda e não recebe a cor de fundo do elemento.

2. Qual camada aumenta a área clicável do elemento junto com o fundo?

O padding aumenta a área interna do elemento e acompanha o fundo. Em um botão, por exemplo, ele pode aumentar a área clicável.

3. A largura que aparece em width no CSS é a mesma que o elemento ocupa na tela?

Nem sempre. Com content-box, a largura definida representa apenas o conteúdo, então padding e borda são acrescentados. Com border-box, o valor de width já inclui o conteúdo, padding e borda.

## RODADA 05 — O experimento do box-sizing

> `Ainda no elemento inspecionado → painel Styles → localizar (ou adicionar) box-sizing e alternar o valor`

Troque box-sizing entre content-box e border-box e observe o elemento na tela. Registre a diferença:

```text
width declarado no CSS: 300 px

box-sizing: content-box  ->  largura na tela: 338 px
box-sizing: border-box   ->  largura na tela: 300 px

diferenca entre as duas: 38 px
essa diferenca corresponde a que camadas? A diferença corresponde ao padding dos dois lados e às duas bordas: 18 + 18 + 1 + 1 = 38 px
```

**Sua análise:**

1. Com qual dos dois valores a largura na tela é igual à largura que você declarou?

Com border-box, porque o valor definido em width já inclui o conteúdo, o padding e a borda.

2. Por que quase todo projeto começa o CSS com a regra * { box-sizing: border-box }?

Porque facilita o controle dos tamanhos dos elementos. O padding e a borda passam a fazer parte da largura e altura definidas, evitando que a caixa fique maior do que o tamanho planejado.

3. Se você somar padding a um elemento com border-box, o que muda de tamanho: a caixa ou o conteúdo dentro dela?
A caixa mantém a largura definida no CSS. O padding ocupa espaço dentro dessa largura, fazendo com que a área disponível para o conteúdo diminua.

## 🏆 DESAFIO BÔNUS

Terminou antes do tempo? Escolha um destes:

- No painel Styles, clique no botão + e crie uma regra nova para o elemento. Ela nasce com qual seletor? Por que o DevTools escolheu esse?
- Procure na página um elemento que tenha estilo inline (atributo style). Ele pode ser sobrescrito por uma regra da folha? Teste.
- Encontre dois elementos irmãos com margin vertical e verifique no DevTools se o espaço entre eles é a soma das duas margens ou apenas a maior. Pesquise o nome desse comportamento.