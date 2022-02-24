/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function retornarMes(mes){
    let meses =  ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro']
    return meses[--mes]
}

console.log(retornarMes(7))
console.log(retornarMes(1))
console.log(retornarMes(3))