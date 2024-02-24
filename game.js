let numButton = document.getElementsByClassName("btn");
let labelElement = document.getElementById("text-field");

let int1 = getRandomInt(9);
let int2 = getRandomInt(9);
let int3 = getRandomInt(9);
let int4 = getRandomInt(9);
let labelF1 = document.getElementById("num1");
  labelF1.innerText = int1;
  let labelF2 = document.getElementById("num2");
  labelF2.innerText = int2;
  let labelF3 = document.getElementById("num3");
  labelF3.innerText = int3;
  let labelF4 = document.getElementById("num4");
  labelF4.innerText = int4;

  // FUNCS
function textFunc(a) {
    console.log(a);
    if(a==1){
      labelElement.innerText = labelF1.innerText;
    }
    if(a==2){
      labelElement.innerText = labelF2.innerText;
    }
    if(a==3){
      labelElement.innerText = labelF3.innerText;
    }
    if(a==4){
      labelElement.innerText = labelF4.innerText;
    }
    if(a==0){
      labelElement.innerText = "0/0/0/0";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function restartGame(){
    setNumbers();
    textFunc(0);
}
function setNumbers(){
    let int1 = getRandomInt(9);
    let int2 = getRandomInt(9);
    let int3 = getRandomInt(9);
    let int4 = getRandomInt(9);
  let labelF1 = document.getElementById("num1");
  labelF1.innerText = int1;
  let labelF2 = document.getElementById("num2");
  labelF2.innerText = int2;
  let labelF3 = document.getElementById("num3");
  labelF3.innerText = int3;
  let labelF4 = document.getElementById("num4");
  labelF4.innerText = int4;
}