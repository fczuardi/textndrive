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

## Meu plano

### Tecnologia

Pretendo estudar um pouco a API do [Telegram][telegram] para ver se faço parte
da mecanica do jogo ser via [bot de chat][telegrambot] no celular.

Quero também aproveitar o fim de semana e este sprint para me dar a chance de
experimentar o framework baseado em [Flux][flux] e
programacao funcional [Redux][redux].


O backend será [node][nodejs] e o front-end provavelmente [Phaser][phaser].

- [koa][koa] (webserver)

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
[nodejs]:https://nodejs.org/
[pacman]:https://en.wikipedia.org/wiki/Pac-Man
[phaser]:http://phaser.io/
[redux]:http://rackt.github.io/redux/
[rallyx]:http://www.arcadetotal.com/?p=1056
[telegram]:https://telegram.org
[telegrambot]:https://core.telegram.org/bots/api
