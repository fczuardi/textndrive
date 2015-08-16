Text & Drive
============

desafiando o monopólio
-----------------------

### Comunicação é tudo!

Um desempregado recém chegado à cidade grande, escolhe virar motorista particular e tentar ganhar a vida servindo usuários de um app polêmico.

Depois de um bom começo no entanto nosso herói se ve agora ameacado por concorrentes violentos e precisa manter-se atento à comunicaçao via chat para escapar das armadilhas e servir bem seus clientes.

_Tensão e adrenalina nas ruas da metréopole._

### Aviso

O desenvolvimento deste jogo comecou em outro repositorio: https://github.com/fczuardi/semcomp15
Migrei para este novo por questoes de refactoring (queria testar o redux).


### Requisitos
É necessário ter a app de chat Telegram instalada em algum dispositivo (smartphone ou no proprio computador) para jogar este jogo. O download é gratuito e pode ser feito em https://telegram.org/

### Comandos:
- Para dirigir o carro: setas direcionais.
- Para conversar com a central/enviar comandos para o chat bot: teclado (na app Telegram, que precisa estar instalada)

### Justificativa

Comunicação é tudo, a popularizacao da internet e dos dispositivos moveis nos
permite hoje comunicarmos com pessoas e servicos de qualquer lugar do globo.
Esta quebra de paradigma vem emancipando os cidadaos na medida que desafia e
quebra modelos de negocios e monopolios antes garantidos pela necessidade de
intermediários.

A ubiquidade da comunicacao nos deixa mais proximos das utopias de um mundo
realmente globalizado, sem fronteiras e sem intervencoes burocraticas/estatais
desnecessarias. Napster, bittorrent, airbnb, uber, craigslist, bitcoin,
openstreetmap, youtube, twitter, whatsapp sao só alguns exemplos de como a
inovacao pode melhorar nossas vidas.

…E, desagradar velhas industrias/modelos/concentracoes de poder.

Foi mais ou menos dai que surgiu a justificativa do jogo, aproveitar o
spotlight gerado por brigas entre motoristas particulares do aplicativo Uber
contra taxistas e fazer um jogo que levante também o debate :)

Mas o principal, eu queria brincar de fazer bot de chat e um joguinho ao estilo
dos clássicos RallyX (o arcade do carrinho que solta fumaça) e GTA2 (uma jogo
muito divertido que marcou minha adolescencia). Queria me divertir!

### Fotos

Veja album completo em http://imgur.com/a/Ac78b

![Imgur](http://i.imgur.com/kdqvCXil.png)

![Imgur](http://i.imgur.com/MFj7mWwl.png)

![Imgur](http://i.imgur.com/ijiTxHLl.png)

## História / Meu plano

### Tecnologia

Pretendo estudar um pouco a API do [Telegram][telegram] para ver se faço parte
da mecanica do jogo ser via [bot de chat][telegrambot] no celular.

Quero também aproveitar o fim de semana e este sprint para me dar a chance de
experimentar o framework [Redux][redux] que é baseado nos paradigmas [Flux][flux]
e programacao funcional. A parte do front end da app em si (pgina html e
componentes de interface) usarei [React][react].

O backend será [node][nodejs], usando o [koa][koa] para servir as páginas
estáticas e a API, exposta publicamente com o reverse proxy [nginx][nginx].

A engine de jogo/sprites será a [Phaser][phaser].

## Interface/gameplay

A principio um jogo simples, 2D visto de cima, seguindo
a linha de arcades antigos tipo [Rally-X][rallyx] e [Pac-man][pacman].

### Duas telas

A ideia é fazer parte do jogo se passar numa segunda tela (um smartphone com [Telegram][telegram] instalado), como se fosse o próprio smartphone do motorista particular, que recebe os destinos onde deve
buscar passageiros e alertas de potenciais perigos
da cidade.

### Requisitos

- navegador com suporte a websocket
  - Firefox 7-9 (Old) (Protocol Version 8)
  - Firefox 10+ (Protocol Version 13)
  - Chrome 14,15 (Old) (Protocol Version 8)
  - Chrome 16+ (Protocol Version 13)
  - Internet Explorer 10+ (Protocol Version 13)
  - Safari 6+ (Protocol Version 13)

### Contribua

Instrucoes de como baixar e rodar o código se encontram em [INSTALL.md][installdoc]

## Se der tempo

Tenho vontade de fazer uma interface bem retrô e ter na tela de abertura o tradicional "insert coin" para inserir créditos no jogo. Se der tempo quero que estas moedas sejam [Dogecoin][dogecoin]

[dogecoin]:http://dogecoin.com/
[flux]:https://facebook.github.io/flux/
[installdoc]:https://github.com/fczuardi/textndrive/blob/master/INSTALL.md
[koa]: http://koajs.com/
[nginx]:http://nginx.org/en/
[nodejs]:https://nodejs.org/
[pacman]:https://en.wikipedia.org/wiki/Pac-Man
[phaser]:http://phaser.io/
[react]:http://facebook.github.io/react/
[redux]:http://rackt.github.io/redux/
[rallyx]:http://www.arcadetotal.com/?p=1056
[telegram]:https://telegram.org
[telegrambot]:https://core.telegram.org/bots/api
