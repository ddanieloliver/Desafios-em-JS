/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos: */

function salario(horasTrabalhadas, valorHora){
    return `Salário igual a R$ ${horasTrabalhadas * valorHora}`
}

console.log(salario(500,40))
console.log(salario(800,30))
console.log(salario(300,25.7))