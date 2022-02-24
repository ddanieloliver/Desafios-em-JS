/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
 */

function simboloMais(num){
    let armazenar = ''
    for (let i = 0; i < num; i++){ 
        armazenar += '+'
    }
    return `"${armazenar}"`
}

console.log(simboloMais(7))
console.log(simboloMais(72))