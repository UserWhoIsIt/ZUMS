const numButton = document.getElementsByClassName("btn");

const labelF1 = document.getElementById("num1");
const labelF2 = document.getElementById("num2");
const labelF3 = document.getElementById("num3");
const labelF4 = document.getElementById("num4");
const labelF5 = document.getElementById("num5");
const labelF6 = document.getElementById("num6");
const labelF7 = document.getElementById("num7");
const labelF8 = document.getElementById("num8");
const labelF9 = document.getElementById("num9");
const labelF0 = document.getElementById("num0");
const labelAr=[labelF1,labelF2,labelF3,labelF4,labelF5,labelF6,labelF7,labelF8,labelF9,labelF0];


const numberField1 = document.getElementById("text-field1");
const numberField2 = document.getElementById("text-field2");
const fieldAr=[numberField1, numberField2];

let c = 0;
let numbersInLevel = 0;

const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const divideButton = document.getElementById('divide-button');
const multiplyButton = document.getElementById('multiply-button');
const resetButton = document.getElementById('restart-button');

const resField = document.getElementById("result-field");

let game = document.getElementById("game-container");
let menu = document.getElementById("menu-container");
let levelSelect = document.getElementById("level-container");


  let int1=int2=int3=int4=int5=int6=int7=int8=int9=int0=0;
  const numbAr=[int1,int2,int3,int4,int5,int6,int7,int8,int9,int0];
  let busyNAr=[0,0];

  // FUNCS
function textFunc(a) {
    console.log(c);
    if(a==0)
    {
        for (let step = 0; step < fieldAr.length; step++) {
            fieldAr[step].innerText="";
          }
          for(let step = 0; step < busyNAr.length;step++){
            busyNAr[step]=0;
          }
          resField.innerText = "";
          
    }
    else{
        if(c == 0){
        fieldAr[c].innerText = numbAr[a-1]
        busyNAr[c]=numbAr[a-1];
        c++;
        } else{
            fieldAr[c].innerText = numbAr[a-1]
            busyNAr[c]=numbAr[a-1];
            c--;
        }

    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function restartGame(){
    setVisibility(1);
    setNumbers(numbersInLevel);
    textFunc(0);
}
function setNumbers(nOn){
  for(let step = 0; step < nOn;step++)
  {
    numbAr[step]=getRandomInt(9);
    labelAr[step].innerText=numbAr[step];
  }
}

 // ButtonFuncs
function doOp(action){
  if(action == '+')
  {
    resField.innerText = busyNAr[0] + busyNAr[1];
  } else if(action == '-')
  {
    resField.innerText = busyNAr[0] - busyNAr[1];
  } else if(action == '/')
  {
    let opRes = busyNAr[0] / busyNAr[1]
    if(Number.isInteger(opRes) == true)
    {
      resField.innerText = opRes;
    } else{
      resField.innerText = Math.floor(opRes);
    }
  } else if(action == '*')
  {
    resField.innerText = busyNAr[0] * busyNAr[1];
  }
}

// Start Menu
function setVisibility(par){

  if(par==0)
  {
    game.style.visibility = 'hidden';
    levelSelect.style.visibility = 'hidden';
    menu.style.visibility = 'visible';
  }
  if(par==1)
  {
    game.style.visibility = 'visible';
    levelSelect.style.visibility = 'hidden';
    menu.style.visibility = 'hidden';
  }
  if(par==2)
  {
    game.style.visibility = 'hidden';
    menu.style.visibility = 'hidden';
    levelSelect.style.visibility = 'visible';
  }
}

//Menu Buttons & Interactions
function selectLevel(){
  menu.style.visibility = 'hidden';
  levelMenu();
}
function exit(){
  window.close();
}
function settingsMenu(){
  ////////////////////////
}

function levelMenu(){
  setVisibility(2);
}

function loadLevel(par){
  if(par==4)
  {
    numbersInLevel=par;
    setNumbers(numbersInLevel);
    //textFunc(1);
    setVisibility(1);
  }
}
