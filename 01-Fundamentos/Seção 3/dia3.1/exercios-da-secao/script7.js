/* 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
let nota = 58;

if (nota < 0 || nota > 100) {
  console.log("Error!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}
