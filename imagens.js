// Todos os códiogos referente as imagens do jogo!

let imagemDaEstrada;
let imagemDoPersonagem;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;

let somDeColisao;
let somDePontos;
let somDaTrilha;



function preload(){
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoPersonagem = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarro4 = loadImage("imagens/carro-4.png");
  imagemDoCarro5 = loadImage("imagens/carro-5.png");
  imagemCarros = [imagemDoCarro1 , imagemDoCarro2 , imagemDoCarro3 , imagemDoCarro4 , imagemDoCarro5 , imagemDoCarro1 ]
  
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDePontos = loadSound("sons/pontos.wav")
  somDaTrilha = loadSound("sons/trilha.mp3")
}
