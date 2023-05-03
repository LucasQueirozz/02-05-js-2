//Entrada de dados
let salario = Number(prompt("Digite o valor do salário"));
let reajuste = Number(prompt("Digite o percentual de reajuste"));

//Processamento de dados
let resultado = salario + (salario * reajuste);

//Saída de dados
alert(`O valor reajustado é de ${resultado}`);