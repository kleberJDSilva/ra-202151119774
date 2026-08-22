# FICHA DE INVESTIGAÇÃO

*O que viaja pela rede entre o seu clique e a página na tela*

**Programação Web — Aula 1 de 20 · Arquitetura das Aplicações Web**

## 🎯 MISSÃO

Você vai abrir as ferramentas de desenvolvedor do navegador e descobrir, por conta própria, o que acontece entre apertar Enter numa URL e ver a página pronta. Ninguém vai explicar antes — as respostas estão na tela.

- Escolha um site à sua livre escolha e mantenha o MESMO site nas 5 rodadas.
- Abra o DevTools: F12 (ou Ctrl+Shift+I) e vá para a aba Network.
- Preencha a ficha à mão, com suas palavras. Não há resposta "de gabarito".
- Errar aqui é esperado e não vale nota: a ficha é material de investigação, não prova.

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** kleber jardim da silva  **Turma:** PW   **Data:** 22/ 08 / 2026

## RODADA 01 — A primeira requisição

> `DevTools → aba Network → marcar "Disable cache" → recarregar a página (F5)`

A lista se enche de linhas. Olhe apenas a PRIMEIRA delas — é o documento que o navegador pediu quando você digitou o endereço.

```text
Name          Status   Type       Size      Time
------------  ------   --------   -------   ------

https://g1.globo.com/   200 ok    161KB     69 ms
```

**Sua análise:**

1. Qual é o método HTTP e o status code dessa primeira requisição?
GET, o status code é 200 OK

2. Qual o tamanho dela em kB? Ela é a maior da lista?
161 kb. É a maior da lista

3. Some o total transferido pela página (barra inferior do DevTools). Quantas requisições foram, no total?

O total transferido pela página foi 10,172 KB. O número de requisições foi de 503.
## RODADA 02 — O que vem depois

> `Usar os filtros do topo da aba Network: All · Doc · CSS · JS · Img · Font`

O navegador pediu muito mais do que você digitou. Classifique o que veio depois e conte cada tipo.

```text
Doc  (HTML) .......... 14 requisições
CSS  (estilo) ........ 10 requisicoes
JS   (comportamento) . 94 requisicoes
Img  (imagens) ....... 72 requisicoes
Font (tipografia) .... 9 requisicoes
```

**Sua análise:**

1. Ninguém clicou nesses arquivos. Quem, então, pediu por eles?

Quando eu digito no navegador o site do g1, o navegador enviar uma requisição para o servidor, o servidor responde com o HTML, só que o navegador olha o HTML e entende que precisa de várias outras coisas para entregar a página completa, sendo assim o propriop navegador faz outras requisições para pegar todos os itens.


2. Há requisições para endereços de OUTROS domínios? Anote um deles e arrisque um palpite sobre o que seja.

Sim, encontrei o https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/logo/tenant/cartola.svg. Por causa do "S3" pode ser um serviço de armazenamento.


## RODADA 03 — Anatomia de um pedido e de uma resposta

> `Clicar em qualquer linha da lista → aba Headers → seções General e Response Headers`

Cada linha da lista esconde uma conversa em texto puro. É isso que trafega na rede:

```text
GET /index.html HTTP/1.1          <- o pedido do navegador
Host: www.site.com
User-Agent: Mozilla/5.0 ...

HTTP/1.1 200 OK                   <- a resposta do servidor
Content-Type: text/html; charset=utf-8
Content-Length: 48213
Server: nginx

<!DOCTYPE html> ...               <- o conteudo, finalmente
```

**Sua análise:**

1. Na requisição que você escolheu, qual o valor de Content-Type?

text/html; charset=UTF-8


2. Qual servidor respondeu (header Server)? E o status code?

O header Server não foi informado na resposta. Apareceu o via: 2.1 KubeCache, indicando que a resposta passou por uma camada de cache. O status code foi 200 OK.


3. Compare o Content-Type de um arquivo CSS com o de uma imagem. O que muda?

O content-Type indicao tipo de arquivo que está sendo enviado, ou seja, esse tipo de arquivo mostra o que está sendo enviado na response
text/css; charset=utf-8
image/avif


## RODADA 04 — Quando alguma coisa dá errado

> `Na barra de endereços, acrescentar /pagina-que-nao-existe-123 ao domínio e dar Enter`

Com o DevTools aberto, observe a requisição da página inexistente. O servidor respondeu — só não respondeu o que você queria.

```text
HTTP/1.1 404 Not Found    <- preencha status e mensagem

Compare com a rodada 01:
  rodada 01 -> status 200 ok
  rodada 04 -> status 404 Not Found
```

**Sua análise:**

1. O servidor está no ar ou fora do ar? Como você sabe?

O servidor está no ar, pois respondeu à requisição com o status 404 Not Found. Isso significa que o servidor recebeu e processou o pedido, mas não encontrou a página solicitada.

2. O erro foi de quem pediu ou de quem respondeu? Justifique.

Foi de quem pediu (cliente), no sentido de que você/navegador solicitou uma página que não existe.

3. Se o status fosse 500 em vez do que você anotou, a conclusão seria a mesma? Por quê?

Não. Se o status fosse 500, a conclusão seria diferente, pois o código 500 indica um erro interno do servidor ao processar a requisição. No 404, o servidor está funcionando, mas o recurso solicitado não foi encontrado.

## RODADA 05 — Quem faz o quê na página

> `DevTools → Ctrl+Shift+P → digitar "Disable CSS" → Enter. Depois recarregue para desfazer.`

Este é o experimento que separa as três tecnologias da web. Observe a página antes e depois:

```text
COM CSS                    SEM CSS
-----------------------    -----------------------
cores, colunas, fontes     ______________________
menu na horizontal         ______________________
textos e links             ______________________
```

**Sua análise:**

1. O texto e as imagens desapareceram junto com o CSS? O que isso diz sobre onde o CONTEÚDO mora?

Não. O texto e as imagens continuaram aparecendo, mesmo sem o CSS. Isso mostra que o conteúdo da página está no HTML, enquanto o CSS é responsável principalmente pela aparência e organização.

2. Descreva em uma frase o papel do CSS, com base apenas no que você acabou de ver.

O CSS é responsável por definir a aparência e a organização visual dos elementos da página, como cores, fontes, tamanhos, espaçamentos e posições.

3. Ainda restou algum comportamento (menu que abre, botão que responde)? De qual das três tecnologias ele vem?

Sim. Alguns comportamentos continuaram funcionando, como menus ou botões, porque eles são controlados pelo JavaScript.
