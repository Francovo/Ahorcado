let ArrayPalabra = [];
let inputText = "";
let LetraWordSecret = "";
let NumErrors = 0;

//Creacion h1 para letras de la palabra
function createWord() {
  ArrayPalabra.forEach((letra) => {
    LetraWordSecret = letra.toUpperCase();
    document.getElementById(
      "SecretWord"
    ).innerHTML += `<h1 class="Text ${LetraWordSecret}">${LetraWordSecret}</h1>`;
  });
}

//Seleccion de la palabra de juego
function GetWordGame(e) {
  let WordGame = document.querySelector("#inputWord").value.toUpperCase();

  if (WordGame.length > 0) {
    ArrayPalabra = Array.from(WordGame);
    document
      .getElementById("ContainerWord")
      .classList.toggle("ContainerOculto");
    document
      .getElementById("ContainerGame")
      .classList.toggle("ContainerOculto");

    createWord();
  }
}

//Uso del input que ingresa el jugador
const dataInput = document.getElementById("InputGame");
dataInput.addEventListener("keyup", (e) => {
  inputText = e.key.toUpperCase();

  if (ArrayPalabra.includes(inputText)) {
    const dataword = document.querySelectorAll(`.${inputText}`);
    dataword.forEach((elemento) => {
      elemento.classList.remove("Text");
    });
  } else {
    NumErrors += 1;

    

    if (NumErrors == 1) {
      document.querySelector(".ContainerImg").innerHTML = "<img src='../images/Bad2.jpeg'>";
      NumErrors + 1;
    }
    if (NumErrors == 2) {
      document.querySelector(".ContainerImg").innerHTML = "<img src='../images/Bad3.jpeg'>";
      NumErrors + 1;
    }
    if (NumErrors == 3) {
      document.querySelector(".ContainerImg").innerHTML = "<img src='../images/Bad4.jpeg'>";
      NumErrors + 1;
    }
    if (NumErrors == 4) {
      document.querySelector(".ContainerImg").innerHTML = "<img src='../images/Bad5.jpeg'>";
      NumErrors + 1;
    }
    if (NumErrors == 5) {
      document.querySelector(".ContainerImg").innerHTML = "<img src='../images/Bad6.jpeg'>";
      NumErrors + 1;
    }
    if (NumErrors == 6) {
      document.querySelector(".ContainerImg").innerHTML = "<img src='../images/EndGame.jpeg'>";
    }
  }
});
