function calcular() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let md = document.getElementById("md").value;
  let result = 0;

  if (md == "*") result = n1 * n2;
  else if (md == "+") result = n1 + n2;
  else if (md == "/") result = n1 / n2;
  else if (md == "-") result = n1 - n2;

  document.getElementById("saida").innerText = result;
}
