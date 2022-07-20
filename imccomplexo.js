var peso = 26.3;
var status = "";

if (peso < 20.7) {
   status = "Abaixo do peso";
} else if (peso >= 20.7 && peso < 26.4) {
   status = "Peso normal";
} else if (peso >= 26.4 && peso < 27.8) {
   status = "Pouco acima do peso";
} else if (peso >= 27.8 && peso < 31.1) {
   status = "Acima do peso";
} else {
   status = "Obeso";
}

console.log(status)
