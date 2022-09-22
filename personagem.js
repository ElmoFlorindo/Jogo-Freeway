// Todos os códiogos referente o personagem do jogo!

let yPersonagem = 370
let xPersonagem = 250
let colisao = false
let placar = 0

function mostraPersonagem(){
  
  image(imagemDoPersonagem,xPersonagem , yPersonagem , 25 ,25);
  
}

function movimentaPersonagem(){
  
  if (keyIsDown(UP_ARROW)){
    yPersonagem -= 2    
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yPersonagem +=  2  } 
  }
  if (keyIsDown(LEFT_ARROW)){
    if (podeMoverParaEsquerda()){
    xPersonagem -= 2}
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (podeMoverParaDireita()){
    xPersonagem += 2}
  }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao(){
  for (let i = 0 ; i < imagemCarros.length ; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro,alturaCarro,xPersonagem,yPersonagem,15);
    if (colisao){
      voltaPerssonagemPInicial();
      somDaColisao.play();
      if (meusPontosMaiorQueZero()){
        placar -= 1
      }
    }
  }
}

function voltaPerssonagemPInicial(){
  yPersonagem = 370;
}

function marcaPontos(){
  
  textSize(25)
  fill(255,0,255)
  text(placar, 50 , 29)
}

function numeroDePontos(){
  numeroDePontos
    if(yPersonagem < 10){
      placar += 1
      somDePontos.play()
      voltaPerssonagemPInicial()
    }
}

function meusPontosMaiorQueZero(){
  return placar > 0
}

function podeSeMover(){
  return yPersonagem < 370
}

function podeMoverParaEsquerda(){
  return xPersonagem > 0 
}

function podeMoverParaDireita(){
  return xPersonagem < 525
}




