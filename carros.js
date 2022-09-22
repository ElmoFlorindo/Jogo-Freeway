// Todos os códigos referente aos carros!

//Criando listas (array)

let xCarros = [600 , 600 , 600 , 600 , 600 , 600]
let yCarros = [42 , 98 , 149 , 211 , 263 , 316]
let velocidadeDosCarros = [2.1 , 3.1 , 2.5 , 4.9 , 3 ,4]
let comprimentoCarro = 45
let alturaCarro = 40



function mostraCarros(){
  
  for (let i = 0 ; i < imagemCarros.length ; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro)
  }
 
}

function movimentaCarros(){
  for (let i = 0 ; i < imagemCarros.length ; i++)         {xCarros[i] -= velocidadeDosCarros[i]
  }
}

function voltaCarros(){
 
  for (let i = 0 ; i < imagemCarros.length ; i++){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 550
  }
  }
  
}

function passouTodaATela(xCarros){
     return xCarros < -50
}

 



/*
function mostraCarro1(){
  
  image(imagemDoCarro1,xCarros[0],yCarros[0],35,35);
  
}

function movimentaCarro1(){
  xCarros[0] -= velocidadeDosCarros[0]
    if (xCarros[0] < -50){
    xCarros[0] = 550
  }
}

function mostraCarro2(){
  
  image(imagemDoCarro2,xCarros[1],yCarros[1],35,35);
  
 }

function movimentaCarro2(){
  xCarros[1] -= velocidadeDosCarros[1]
  if (xCarros[1] < -50){
    xCarros[1] = 550
  }
}

function mostraCarro3(){
  
  image(imagemDoCarro3,xCarros[2],yCarros[2],35,35);

}

function movimentaCarro3(){
  xCarros[2] -= velocidadeDosCarros[2]
 if (xCarros[2] < -50){
   xCarros[2] = 550
 }
}
*/
