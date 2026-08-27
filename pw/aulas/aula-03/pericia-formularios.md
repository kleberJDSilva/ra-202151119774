# PERÍCIA EM FORMULÁRIOS

*Como a web coleta dados — e o que o navegador faz (e não faz) para protegê-los*

**Programação Web — Aula 3 de 20 · Formulários, Tabelas e Validação**

## 🎯 MISSÃO

Você vai testar formulários reais como um usuário desastrado e depois como alguém mal-intencionado. O objetivo é descobrir onde o HTML ajuda, onde ele atrapalha e até onde a proteção do navegador realmente vai.

- Use o arquivo formulario-hostil.html (ambiente virtual) e um formulário de cadastro real de um site à sua escolha.
- Trabalhe com o DevTools aberto (F12): abas Elements e Console.
- Nas rodadas 3 e 5, use o modo dispositivo (Ctrl+Shift+M) — ou o próprio celular.
- Preencha à mão. A Rodada 5 é a mais importante: não pule.

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** kleber jardim da silva  **Turma:** pw   **Data:** 26 / 08 / 2026

## RODADA 01 — Anatomia de um campo

> `Formulário real → clicar com o botão direito num campo → Inspecionar`

Cada campo de formulário é uma tag input com atributos que decidem tudo. Catalogue três campos do formulário que você escolheu:

```text
campo   type= text name= fname
  1     id= fname  required? ( )sim (x)nao

campo   type= text  name= email
  2     id= email  required? ( )sim (x)nao

campo   type= password  name= password
  3     id= password  required? ( )sim (x)nao
```

**Sua análise:**

1. Os atributos name e id têm o mesmo valor nos campos que você viu? Eles servem para a mesma coisa? 

Sim, nos campos analisados os atributos name e id possuem o mesmo valor. Porém, eles têm funções diferentes: o id identifica o elemento dentro da página e pode ser usado pelo label e pelo JavaScript; já o name identifica o campo quando os dados do formulário são enviados.


2. Algum campo usa placeholder em vez de um rótulo visível? Qual o problema disso?

O problema de usar apenas placeholder é que ele desaparece quando o usuário começa a digitar. Além disso, o placeholder não deve substituir um <label>, pois o rótulo identifica permanentemente o campo e é melhor para acessibilidade.

3. Que tipo de dado cada campo espera receber, só pelo type?

Campo 1 (type="text"): espera receber texto, como um nome.
Campo 2 (type="text"): também espera receber texto.
Campo 3 (type="password"): espera receber uma senha e oculta os caracteres digitados.

## RODADA 02 — O teste do label

> `Clicar no TEXTO do rótulo (não no campo) em formulario-hostil.html e depois no formulário real`

Um label corretamente associado faz o clique no texto focar o campo. É um teste de 1 segundo que revela se a marcação está certa:

```text
formulario-hostil.html   clicar no rotulo focou o campo? ( )sim (x)nao
formulario real          clicar no rotulo focou o campo? ( )sim (x)nao

codigo do que FUNCIONA:
  <label for="fname">Nome</label>
  <input id=""fname">
```

**Sua análise:**

1. Qual atributo do label precisa bater com qual atributo do input?

O atributo for do <label> precisa ter o mesmo valor que o id do <input>.

2. Além do clique, quem mais depende dessa associação para saber o nome do campo?

Leitores de tela e outras tecnologias assistivas dependem dessa associação para identificar corretamente o campo.

3. No formulário hostil, o que exatamente estava faltando?

<label> associado ao input

## RODADA 03 — O teclado que o celular abre.

> `DevTools → Ctrl+Shift+M (modo dispositivo) ou abra a página no seu celular`

O atributo type muda o teclado que aparece no celular. Teste cada um e descreva o que apareceu:

```text
type="text"      teclado: teclado normal de texto
type="email"     teclado: teclado otimizado para e-mail, com acesso fácil a @ e .
type="tel"       teclado: teclado numérico/telefone
type="number"    teclado: teclado numérico
type="date"      controle: seletor de data/calendário
```

**Sua análise:**

1. Qual type você usaria para CEP? E para um valor em reais? Justifique.

Eu usaria type="text" com inputmode="numeric", pois CEP é um código e pode começar com zero e para valores em reais pode ser utilizado type="number" quando o campo representa um valor numérico, com validação adequada para casas decimais.

2. Um campo de telefone com type="text" funciona. Então por que usar type="tel"?

Porque type="tel" informa ao navegador que o campo é destinado a telefone e permite que celulares apresentem um teclado mais adequado para números.

3. O type="date" mostrou um calendário? Quem desenhou esse calendário: você ou o navegador?

O calendário é fornecido pelo navegador/sistema operacional. Eu apenas defini type="date" no HTML.

## RODADA 04 — A validação que vem de graça

> `Formulário real → deixar tudo em branco → clicar em enviar`

Antes de qualquer JavaScript, o navegador já barra o envio. Anote a mensagem EXATA que apareceu e descubra quem a causou:

```text
mensagem exibida pelo navegador:
  "Necessário preencher campos obrigatórios"

campo que ele apontou primeiro: Estado
atributo no HTML que causou isso: required

agora digite "batata" num campo type="email" e envie:
  o que aconteceu? Apareceu uma mensagem: Digite um e-mail válido
```

**Sua análise:**

1. Você escreveu alguma linha de JavaScript para isso funcionar?

Não. A validação básica é realizada pelo próprio navegador através da validação nativa do HTML.

2. A mensagem apareceu em português. Quem escolheu esse idioma?

O navegador/sistema do usuário determina o idioma da mensagem de validação.

3. Qual atributo você usaria para exigir no mínimo 3 caracteres num campo de nome?

minlength="3"

## RODADA 05 — Burlando a validação (a rodada que importa)

> `DevTools → Elements → achar um input com required → duplo clique no atributo → apagar → Enter → submeter vazio`

Você acabou de remover a proteção do formulário sem instalar nada, em 3 segundos, só com o navegador. Registre o resultado:

```text
antes de apagar o required, o envio vazio era: ( )bloqueado ( )permitido
depois de apagar o required, o envio vazio foi: ( )bloqueado ( )permitido

tempo que você levou para fazer isso: 5 segundos
ferramenta extra que voce precisou instalar: nenhuma
```

**Sua análise:**

1. Se qualquer pessoa faz isso em 3 segundos, a validação do HTML serve para proteger o SISTEMA ou para ajudar o USUÁRIO?

Serve principalmente para ajudar o usuário, e não para proteger o sistema.

2. Onde, então, a validação precisa acontecer de novo obrigatoriamente?

No servidor/backend, porque o usuário pode modificar o HTML e remover as validações do navegador.

3. Escreva em uma frase o que você diria a um colega que afirma "meu formulário está seguro, tem required em tudo".

“Ter required ajuda o usuário a preencher o formulário, mas não torna o sistema seguro; os dados precisam ser validados também no servidor.”

## RODADA 06 — A tabela é de dados ou de layout?

> `Procurar uma tabela real (extrato bancário, tabela de preços, classificação de campeonato) → Inspecionar`

Tabela serve para dados tabulares, com cabeçalhos que dizem o que cada coluna significa. Verifique se a que você achou está marcada corretamente:

```text
usa <caption> (titulo da tabela)?     ( )sim (x)nao
usa <thead> e <tbody>?                (x)sim ( )nao
os cabecalhos sao <th> ou <td>?       (x)th  ( )td
os <th> tem scope="col" ou "row"?     ( )sim (x)nao

site investigado: https://ge.globo.com/futebol/brasileirao-serie-a/
```

**Sua análise:**

1. Se os cabeçalhos são td, como um leitor de tela sabe que "R$ 250,00" pertence à coluna Valor?

O leitor de tela teria mais dificuldade para identificar a relação entre o valor e o nome da coluna, porque <td> representa apenas uma célula comum de dados. Já o <th> indica que aquela célula é um cabeçalho, permitindo que tecnologias assistivas entendam a relação entre o cabeçalho e os dados correspondentes.

2. Para que serve o atributo scope?

O scope informa a quais células de dados aquele <th> está relacionado.

scope="col" → o cabeçalho representa uma coluna.
scope="row" → o cabeçalho representa uma linha.

3. Você encontrou alguma tabela usada para posicionar elementos na tela em vez de mostrar dados? Por que isso é um problema?

Na página investigada, a tabela do Brasileirão é usada corretamente para dados tabulares, e não para layout.

Usar <table> apenas para posicionar elementos na tela é um problema porque mistura estrutura visual com significado semântico. Um leitor de tela pode interpretar aquilo como uma tabela de dados, tornando a navegação confusa para pessoas que utilizam tecnologias assistivas.

Conclusão: <table> deve ser usado quando existe uma relação real entre linhas e colunas de dados. Para organizar o layout de uma página, é melhor utilizar HTML semântico e CSS.

## DESAFIO

Terminou antes do tempo? Escolha um destes:

- No Console, digite document.querySelector('form').checkValidity() e depois .reportValidity(). O que cada um retorna e faz?
- Descubra o atributo pattern de algum campo real e traduza a expressão regular dele em português.
- Compare um formulário que usa method="GET" com um que usa method="POST": submeta os dois e observe a barra de endereços. Onde os dados aparecem?