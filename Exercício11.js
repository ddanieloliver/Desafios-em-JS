/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
 */

function receberPrimeiroEUltimoElemento(array){
    const indicePrimeiroElemento = 0
    const indiceSegundooElemento = array.length -1
    const primeiroElemento = array[indicePrimeiroElemento]
    const segundoElemento = array[indiceSegundooElemento]

    return [primeiroElemento, segundoElemento]
}

console.log(receberPrimeiroEUltimoElemento(['Bom dia', 5, 'Meu bem!']))
console.log(receberPrimeiroEUltimoElemento([1, 2, 3, 4, 5, 6]))
