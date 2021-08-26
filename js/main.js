//Principais variáveis==
const background = document.querySelector('.background')
const dino = document.querySelector('.dino');
let isJumping = false;
//Principais variáveis==

//eventos


//eventos
function handleKeyup (event){//Função para chamar a tecla "espaço"
  if(event.keyCode === 32){
    if(!isJumping){
    jump();
    }  
  }  
}; // Fim Função para chamar a tecla "espaço"

function jump(){//função que adiciona evento interval para pular
  let position = 0;
  let upInterval = setInterval(() => {
     if(position >= 150){
    clearInterval(upInterval);
    //descendo
     
    let downInterval = setInterval(() =>{
      if(position <= 0){
        clearInterval(downInterval);
        isJumping = false;                      
      }else{position -= 30;
      dino.style.bottom = position + "px";
      }
    },20);   
  }else{
    //subindo
    position += 20;
    dino.style.bottom = position + "px";//chamando elemento css
   }
  },20);
};//Fim da função que adiciona evento interval para pular

function createCactus(){
  const cactus = document.createElement('div');//adiciona uma div no HTML
  let cactusPosition = 1000;
  
  cactus.classList.add('cactus');//adiciona uma classe para a variavel
  cactus.style.left = 1000 + "px";//define uma posição no css
  background.appendChild(cactus);//cria um filho(objeto)
  
  let leftInterval = setInterval(() =>{
    cactusPosition -= 10;
    cactus.style.left = cactusPosition + "px";

    if(cactusPosition < -60){
        clearInterval(leftInterval);
        background.removeChild(cactus);
    }
  }, 20);
}

createCactus();
document.addEventListener('keyup', handleKeyup);