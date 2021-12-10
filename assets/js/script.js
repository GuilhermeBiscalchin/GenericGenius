let order = [];
let clickedOrder = [];
let score = 0;

// 1 - azul
// 1 - Amarelo
// 2 - Verde
// 3 - Vermelho

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

let orderMix = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementoColor = createColorElement(order[i]);
    lightColor(elementoColor, Number(i) + 1);
  }
};
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }

  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  },250);
};

let createColorElement = (color) => {
  if (color == 0) {
    return blue;
  } else if (color == 1) {
    return yellow;
  } else if (color == 2) {
    return green;
  } else if (color == 3) {
    return red;
  }
};

let nextLevel = () => {
  score++;
  orderMix();
};

let lose = () => {
  alert(
    `Pontuação:${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

let playGame = () => {
  alert("Iniciando Novo Jogo!");
  score = 0;

  nextLevel();
};

blue.onclick = () => click(0)
yellow.onclick = () => click(1)
green.onclick = () => click(2)
red.onclick = () => click(3)


playGame();


// Tempo para responder senão para Game-Over

function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent =  seconds;
      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}
window.onload = function () {
  var duration = 60 * 5; // Converter para segundos
      display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
  
};

