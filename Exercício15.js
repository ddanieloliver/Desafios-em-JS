/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

function retornarPares(array){
    resultado = []
    for(let i = 0; i < array.length; i += 2){
      const causa = array[i] % 2 === 0

      if(causa){
          resultado.push(array[i])
      }
    }
    return resultado
}

console.log(retornarPares([1, 2, 3, 4, 5, 6, 7]))
console.log(retornarPares([20, 30, 40, 50, 60, 70]))