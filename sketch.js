

function setup() {
  createCanvas(550,400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPersonagem();
  movimentaPersonagem();
  mostraCarros();
  movimentaCarros();
  voltaCarros();
  verificaColisao();
  marcaPontos();
  numeroDePontos();
  
  
  
}






