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
  if (contador != 6767){
  md = "+";
  document.getElementById("md").innerText = md;
  }
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
  if (contador != 6767){
  md = "/";
  document.getElementById("md").innerText = md;
  }
  contador = 6767;
}

function mult() {
  if (contador != 6767){
  md = "*";
  document.getElementById("md").innerText = md;
  }
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
}
function dois(){
  if (contador == 0) {
    n1 = "2";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "2";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "2";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "2";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function tres(){
  if (contador == 0) {
    n1 = "3";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "3";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "3";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "3";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function quatro(){
  if (contador == 0) {
    n1 = "4";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "4";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "4";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "4";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function cinco(){
  if (contador == 0) {
    n1 = "5";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "5";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "5";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "5";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function seis(){
  if (contador == 0) {
    n1 = "6";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "6";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "6";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "6";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function sete(){
  if (contador == 0) {
    n1 = "7";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "7";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "7";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "7";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function oito(){
  if (contador == 0) {
    n1 = "8";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "8";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "8";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "8";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
function nove(){
  if (contador == 0) {
    n1 = "9";
    contador = 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 0 && contador < 6767) {
    newvalue = "9";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767) {
    newvalue = "9";
    n2 = n2 + newvalue;
    contador = contador + 1;
    document.getElementById("n2").innerText = n2;
  }
  else if (contador > 6767){
    newvalue = "9";
    n2 = n2 + newvalue;
    document.getElementById("n2").innerText = n2;
  }
}
