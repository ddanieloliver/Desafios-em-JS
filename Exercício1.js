/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!" */

function cumprimentar(pessoa){
    return `Olá ${pessoa}!`
}
console.log(cumprimentar('Marcelo'))