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
}
function menos() {
  md =  "-";
}
function div() {
  md =  "/"
}
function mult() {
  md = "*"
}
function um() {
  if (contador == 0){
    n1 = "1";
    document.getElementById("n1").innerText = n1;
  }
  else {
    newvalue = "1";
    n1 = n1 + newvalue;
    document.getElementById("n1").innerText = n1;
  }
}
function dois() {

}
