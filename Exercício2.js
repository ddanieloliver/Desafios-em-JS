/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
 */

function idadeEmDias(idadeEmAnos){
    return idadeEmAnos*365
}

console.log(idadeEmDias(7))
console.log(idadeEmDias(52))
console.log(idadeEmDias(15))