let contador = 0;
let newvalue = "";
let n1 = "";
let n2 = "";
let md = "";

function result() {
  let result = 0;

  if (md == "*") result = Number(n1) * Number(n2);
  else if (md == "+") result = Number(n1) + Number(n2);
  else if (md == "/") result = Number(n1) / Number(n2);
  else if (md == "-") result = Number(n1) - Number(n2);

  document.getElementById("saida").innerText = result;
}

function mais() {
  md = "+";
  contador = 6767;
}

function menos() {
  if (contador != 6767){
  md = "-";
  document.getElementById("md").innerText = md;
  }
  contador = 6767;
}

function div() {
  md = "/";
  contador = 6767;
}

function mult() {
  md = "*";
  contador = 6767;
}

function um() {
  if (contador == 0) {
    n1 = "1";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "1";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "1";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "1";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
}
function dois(){

}
function tres(){

}
function quatro(){

}
function cinco(){

}
function seis(){

}
function sete(){

}
function oito(){

}
function nove(){

}
