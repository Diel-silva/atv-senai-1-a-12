/* Utilize o método forEach para somar os valores do array [10, 20, 30, 40] e exibir no console: "Soma total: 100". */

let numero = [10, 20, 30, 40]
let soma = 0

numero.forEach(numeros => {
    soma += numeros
   
})
console.log(`Soma total: ${soma}`)