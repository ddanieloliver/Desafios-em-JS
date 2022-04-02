/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60 */

function somarNumeros(array){
    const qtdDeNumeros = array.length
  return  (qtdDeNumeros === 0) ? 0 : array[0] + somarNumeros(array.slice(1))
}

array1 = [5,5,5,5]
console.log(somarNumeros(array1))