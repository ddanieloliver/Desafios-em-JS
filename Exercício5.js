/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

function compararValores(primeiro,segundo){
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

console.log(compararValores(5,6))
console.log(compararValores(4,2))
console.log(compararValores(10,10))
console.log(compararValores(10,'10'))