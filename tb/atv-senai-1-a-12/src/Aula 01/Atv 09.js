/*Crie um código com break que percorra o array [1, 2, 3, 4, 5, 6] e pare quando encontrar o número 4. Exiba no console apenas os números até o 4.*/

let numeros = [1, 2, 3, 4, 5, 6]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === 5){
        break
    }
    console.log(numeros[i])
}