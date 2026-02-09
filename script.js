let contador = 0;
let newvalue = 0;
let n1 =0;
let n2 =0;
function result() {
  let result = 0;

  if (md == "*") result = n1 * n2;
  else if (md == "+") result = n1 + n2;
  else if (md == "/") result = n1 / n2;
  else if (md == "-") result = n1 - n2;

  document.getElementById("saida").innerText = result;
}
function mais() {
  md = "+";
  contador = 6767;
}
function menos() {
  md =  "-";
  contador = 6767;
}
function div() {
  md =  "/"
  contador = 6767;
}
function mult() {
  md = "*"
  contador = 6767;
}
function um() {
  if (contador == 0 && contador > 0){
    n1 = "1";
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador > 1)
    newvalue = "1";
    n1 = n1 + newvalue;
    contador = contador + 1;
    document.getElementById("n1").innerText = n1;
  }
  else if (contador == 6767){
    newvalue = "1";
    n2 = n2 + newvalue;
  }
}
function dois() {
  newvalue = "2";
  n1 = n1 + newvalue;
  document.getElementById("n1").innerText = n1;
}
