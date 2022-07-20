var salarioRecebido = 1000;
var totalGasto = 300;

console.log("Sálario: " + salarioRecebido);
console.groupCollapsed("Gastos: " + totalGasto);

if (salarioRecebido - totalGasto >= 1000){
    console.log("Gastos fora do orçamento")
    }else {
        console.log("Gastos dentro do orçamento")
    }
