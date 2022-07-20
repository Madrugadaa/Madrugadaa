const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if ((sexo == "F" && idade + contribuicao >= 85) || (sexo == "M" && idade + contribuicao >= 95)){
    console.log(nome + ",você está apto para se aposentar")
}else {
    console.log(nome + ",você não está apto para se aposentar")
}
